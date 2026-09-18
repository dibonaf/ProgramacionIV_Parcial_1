import { Component, inject, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PeliculaService } from '../../services/pelicula';

@Component({
  imports: [RouterLink],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  private peliculaService = inject(PeliculaService);
  topPeliculas = computed(() => this.peliculaService.peliculas().slice(0, 3));
}