import { Injectable, signal } from '@angular/core';
import { Pelicula } from '../models/pelicula.model';

@Injectable({
    providedIn: 'root'
})

export class PeliculaService {
    private peliculasSignal = signal<Pelicula[]>([
        {
            id: 1,
            titulo: 'Batman el Caballero de la noche',
            imagen: 'https://m.media-amazon.com/images/M/MV5BN2U3NmZjMTYtY2JhOS00NzU4LWJkMDAtZjFmZjAyN2ZlMTMxXkEyXkFqcGc@._V1_.jpg',
            sinopsis: 'Batman en esta nueva aventura, se enfrenta al Joker en Gotham City.',
            duracion: 120,
            formato: ['2D'],
            idioma: ['Subtitulada'],
            generos: ['Acción'],
            clasificacion: '+13',
        },
        {
            id: 2,
            titulo: 'Papeles en el viento',
            imagen: 'https://festival-films.com/wp-content/uploads/2016/01/Poster-PEEV.jpg',
            sinopsis: 'Un grupo de amigos se embarca en una aventura para recuperar un valioso tesoro perdido.',
            duracion: 110,
            formato: ['2D'],
            idioma: ['Castellano'],
            generos: ['Aventura', 'Comedia'],
            clasificacion: 'ATP',
        },
        {
            id: 3,
            titulo: 'Avengers: Endgame',
            imagen: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg',
            sinopsis: 'Los Vengadores se unen para derrotar a Thanos y salvar el universo.',
            duracion: 180,
            formato: ['3D', '4D'],
            idioma: ['Subtitulada'],
            generos: ['Acción', 'Ciencia ficción'],
            clasificacion: '+13',
        },
        {
            id: 4,
            titulo: 'Toy Story 5',
            imagen: 'https://m.media-amazon.com/images/M/MV5BMTYxMzg0NjQyNV5BMl5BanBnXkFtZTcwNzY1MjQyMQ@@._V1_.jpg',
            sinopsis: 'La historia de los juguetes que cobran vida y viven aventuras en el mundo de los humanos.',
            duracion: 100,
            formato: ['2D', '3D'],
            idioma: ['Castellano'],
            generos: ['Animación', 'Aventura', 'Comedia'],
            clasificacion: 'ATP',
        },
        {
            id: 5,
            titulo: 'El Padrino',
            imagen: 'https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
            sinopsis: 'La historia de la familia Corleone y su lucha por mantener el poder en el mundo del crimen organizado.',
            duracion: 175,
            formato: ['2D'],
            idioma: ['Subtitulada'],
            generos: ['Drama', 'Crimen'],
            clasificacion: '+18',
        },
        {
            id: 6,
            titulo: 'El secreto de sus ojos',
            imagen: 'https://m.media-amazon.com/images/M/MV5BMTYxMzg0NjQyNV5BMl5BanBnXkFtZTcwNzY1MjQyMQ@@._V1_.jpg',
            sinopsis: 'Un ex-investigador judicial decide escribir una novela basada en un caso sin resolver que lo ha perseguido durante años.',
            duracion: 129,
            formato: ['2D'],
            idioma: ['Castellano'],
            generos: ['Drama', 'Misterio', 'Romance'],
            clasificacion: '+13',
        },
        {
            id: 7,
            titulo: 'Los Simpson: La película',
            imagen: 'https://m.media-amazon.com/images/M/MV5BMTYxMzg0NjQyNV5BMl5BanBnXkFtZTcwNzY1MjQyMQ@@._V1_.jpg',
            sinopsis: 'La familia Simpson se enfrenta a una crisis ambiental en Springfield.',
            duracion: 87,
            formato: ['2D', '3D'],
            idioma: ['Castellano', 'Subtitulada'],
            generos: ['Animación', 'Comedia'],
            clasificacion: 'ATP',
        },
        {
            id: 8,
            titulo: 'Jurassic World: Dominion',
            imagen: 'https://m.media-amazon.com/images/M/MV5BMTYxMzg0NjQyNV5BMl5BanBnXkFtZTcwNzY1MjQyMQ@@._V1_.jpg',
            sinopsis: 'Los dinosaurios vuelven a dominar el mundo en esta secuela de Jurassic World.',
            duracion: 142,
            formato: ['2D', '3D', '4D', '5D'],
            idioma: ['Castellano', 'Subtitulada'],
            generos: ['Acción', 'Ciencia ficción'],
            clasificacion: '+13',
        }

    ]);

    get peliculas() {
        return this.peliculasSignal.asReadonly();
    }
}