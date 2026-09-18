export type FormatoPelicula = '2D' | '3D' | '4D' | '5D';
export type ClasificacionEdad = 'ATP' | '+13' | '+18';
export type Idioma = 'Castellano' | 'Subtitulada';

export interface Pelicula {
  id: number;
  titulo: string;
  imagen: string;
  sinopsis: string;
  duracion: number;
  formato: FormatoPelicula[];
  idioma: Idioma[];
  generos: string[];
  clasificacion: ClasificacionEdad;
}
