import { Component, inject, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { CandyService, ProductoCandy } from '../../services/candy';
import { TicketService } from '../../services/ticket';

@Component({
  selector: 'app-candy-bar',
  imports: [],
  templateUrl: './candy-bar.html',
  styleUrl: './candy-bar.css'
})
export class CandyBar {
  // Inyección segura del servicio usando tu estándar de private
  private candyService = inject(CandyService);
  private ticketService = inject(TicketService);
  private router = inject(Router);

  productos = this.candyService.productos();

  // Guardamos las selecciones en un array de objetos con cantidad
  carritoCandy = signal<{ producto: ProductoCandy; cantidad: number }[]>([]);

  // Calculamos el total automáticamente
  totalCandy = computed(() => {
    return this.carritoCandy().reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);
  });

  agregarAlCarrito(producto: ProductoCandy) {
    const carritoActual = this.carritoCandy();
    const itemExistente = carritoActual.find(item => item.producto.id === producto.id);

    if (itemExistente) {
      // Si ya existe, actualizamos la cantidad creando un nuevo array (inmutabilidad)
      this.carritoCandy.set(
        carritoActual.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      // Si no existe, lo agregamos con cantidad 1
      this.carritoCandy.set([...carritoActual, { producto, cantidad: 1 }]);
    }
  }

  restarDelCarrito(producto: ProductoCandy) {
    const carritoActual = this.carritoCandy();
    const itemExistente = carritoActual.find(item => item.producto.id === producto.id);

    if (!itemExistente) return;

    if (itemExistente.cantidad > 1) {
      this.carritoCandy.set(
        carritoActual.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad - 1 }
            : item
        )
      );
    } else {
      // Si la cantidad llega a 0, lo filtramos fuera del array
      this.carritoCandy.set(carritoActual.filter(item => item.producto.id !== producto.id));
    }
  }

  obtenerCantidad(productoId: number): number {
    const item = this.carritoCandy().find(i => i.producto.id === productoId);
    return item ? item.cantidad : 0;
  }

  irAlPago() {
    this.ticketService.setCandy(this.carritoCandy());
    this.router.navigate(['/pago']);
  }
}