import { Component, inject, input, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PeliculaService } from '../../services/pelicula';

@Component({
  imports: [RouterLink],
  selector: 'app-pelicula-detalle',
  styleUrl: './pelicula-detalle.css',
  templateUrl: './pelicula-detalle.html',
})

export class PeliculaDetalle {
  id = input<string>();

  private peliculaService = inject(PeliculaService);

  pelicula = computed(() => {
    const idParam = this.id();
    if (!idParam) return undefined;
    return this.peliculaService.getPeliculaPorId(Number(idParam));
  });
}
