import { Component, inject, input, computed, signal } from '@angular/core';
import { Router, } from '@angular/router';
import { Location } from '@angular/common';
import { ButacaService } from '../../services/butaca';
import { TicketService } from '../../services/ticket';
import { Butaca } from '../../models/butaca.model';

@Component({
  selector: 'app-compra',
  imports: [],
  templateUrl: './compra.html',
  styleUrl: './compra.css'
})
export class Compra {
  id = input<string>();

  // Inyecciones seguras
  private butacaService = inject(ButacaService);
  private ticketService = inject(TicketService);
  private router = inject(Router);
  private location = inject(Location);

  butacasSeleccionadas = signal<Butaca[]>([]);

  private precioNormal = 5000;
  private precioVip = 7500;

  filasDeButacas = computed(() => {
    const todas = this.butacaService.butacas();
    const agrupadas: { [key: string]: any[] } = {};

    todas.forEach(b => {
      if (!agrupadas[b.fila]) agrupadas[b.fila] = [];
      agrupadas[b.fila].push(b);
    });

    return Object.keys(agrupadas).map(letra => {
      const asientos = agrupadas[letra];
      let bloqueIzq, bloqueCentro, bloqueDer;

      if (letra === 'J' || letra === 'K') {
        bloqueIzq = asientos.slice(0, 2);
        bloqueCentro = asientos.slice(2, 12);
        bloqueDer = asientos.slice(12, 14);
      } else {
        bloqueIzq = asientos.slice(0, 4);
        bloqueCentro = asientos.slice(4, 24);
        bloqueDer = asientos.slice(24, 28);
      }

      return { letra, bloqueIzq, bloqueCentro, bloqueDer };
    });
  });

  totalCompra = computed(() => {
    return this.butacasSeleccionadas().reduce((acumulado, butaca) => {
      const precio = butaca.tipo === 'VIP' ? this.precioVip : this.precioNormal;
      return acumulado + precio;
    }, 0);
  });

  toggleButaca(butaca: Butaca) {
    const actuales = this.butacasSeleccionadas();
    const estaSeleccionada = actuales.some(b => b.id === butaca.id);

    if (estaSeleccionada) {
      this.butacasSeleccionadas.set(actuales.filter(b => b.id !== butaca.id));
    } else {
      this.butacasSeleccionadas.set([...actuales, butaca]);
    }
  }

  volverAtras() {
    this.location.back();
  }

  irAlCandyBar() {
    this.ticketService.setButacas(this.butacasSeleccionadas());
    this.router.navigate(['/candy']);
  }
}