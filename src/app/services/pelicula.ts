import { Injectable, inject, signal } from '@angular/core';
import { SupabaseService } from './supabase.service';

@Injectable({
    providedIn: 'root'
})
export class PeliculaService {
    private supabaseService = inject(SupabaseService);
    private supabase = this.supabaseService.getClient();

    private peliculasSignal = signal<any[]>([]);

    get peliculas() {
        return this.peliculasSignal.asReadonly();
    }

    constructor() {
        this.cargarPeliculas();
    }

    private async cargarPeliculas() {
        const { data, error } = await this.supabase
            .from('peliculas')
            .select('*, funciones(idioma, formato)');

        if (error) {
            console.error('Error al traer películas de la base de datos:', error);
            return;
        }

        if (data) {
            const peliculasMapeadas = data.map((p: any) => ({
                id: p.id,
                titulo: p.titulo,
                imagen: p.poster_url,
                sinopsis: p.sinopsis,
                duracion: p.duracion_minutos,
                generos: p.generos,
                clasificacion: p.clasificacion,
                formato: [... new Set(p.funciones?.map((f: any) => f.formato) || [])],
                idioma: [... new Set(p.funciones?.map((f: any) => f.idioma) || [])]
            }));

            this.peliculasSignal.set(peliculasMapeadas);
        }
    }

    getPeliculaPorId(id: number) {
        return this.peliculasSignal().find(p => p.id === id);
    }
}