import { Component, inject, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PeliculaService } from '../../services/pelicula';


@Component({
  imports: [RouterLink],
  selector: 'app-cartelera',
  styleUrl: './cartelera.css',
  templateUrl: './cartelera.html',
})

export class Cartelera {
  private peliculaService = inject(PeliculaService);

  terminoBusqueda = signal('');

  peliculasFiltradas = computed(() => {
    const termino = this.terminoBusqueda().toLowerCase();
    const todas = this.peliculaService.peliculas();

    if (!termino) return todas;

    return todas.filter(p =>
      p.titulo.toLowerCase().includes(termino) ||
      p.generos.some((g: string) => g.toLowerCase().includes(termino))
    );
  });

  actualizarBusqueda(event: Event) {
    const input = event.target as HTMLInputElement;
    this.terminoBusqueda.set(input.value);
  }
}