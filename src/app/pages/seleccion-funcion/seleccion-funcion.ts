import { Component, inject, signal } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from '../../services/ticket';
import { SupabaseService } from '../../services/supabase.service';

@Component({
  selector: 'app-seleccion-funcion',
  standalone: true,
  imports: [],
  templateUrl: './seleccion-funcion.html',
  styleUrl: './seleccion-funcion.css'
})
export class SeleccionFuncion {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private ticketService = inject(TicketService);
  private supabaseService = inject(SupabaseService);
  private supabase = this.supabaseService.getClient();

  // Signals para almacenar los datos únicos que vienen de Supabase
  diasDisponibles = signal<string[]>([]);
  horariosDisponibles = signal<string[]>([]);
  formatosDisponibles = signal<string[]>([]);
  idiomasDisponibles = signal<string[]>([]);

  diaElegido = signal<string>('');
  horaElegida = signal<string>('');
  formatoElegido = signal<string>('');
  idiomaElegido = signal<string>('');

  constructor() {
    const peliculaId = this.route.snapshot.paramMap.get('id');
    if (peliculaId) {
      this.cargarFuncionesDePelicula(peliculaId);
    }
  }

  private async cargarFuncionesDePelicula(peliculaId: string) {
    // Consulta a la base de datos filtrando por la película seleccionada
    const { data, error } = await this.supabase
      .from('funciones')
      .select('*')
      .eq('pelicula_id', peliculaId);

    if (error) {
      console.error('Error al cargar funciones desde Supabase:', error);
      return;
    }

    if (data && data.length > 0) {
      const fechas = [...new Set(data.map((f: any) => f.fecha))] as string[];
      const horas = [...new Set(data.map((f: any) => f.hora))] as string[];
      const formatos = [...new Set(data.map((f: any) => f.formato))] as string[];
      const idiomas = [...new Set(data.map((f: any) => f.idioma))] as string[];

      this.diasDisponibles.set(fechas);
      this.horariosDisponibles.set(horas);
      this.formatosDisponibles.set(formatos);
      this.idiomasDisponibles.set(idiomas);
    }
  }

  seleccionarDia(dia: string) { this.diaElegido.set(dia); }
  seleccionarHora(hora: string) { this.horaElegida.set(hora); }
  seleccionarFormato(formato: string) { this.formatoElegido.set(formato); }
  seleccionarIdioma(idioma: string) { this.idiomaElegido.set(idioma); }

  continuarAButacas() {
    const dia = this.diaElegido();
    const hora = this.horaElegida();
    const formato = this.formatoElegido();
    const idioma = this.idiomaElegido();

    if (!dia || !hora || !formato || !idioma) {
      alert('Por favor, selecciona todas las opciones para continuar.');
      return;
    }

    this.ticketService.setFuncion(dia, hora, formato, idioma);
    const peliculaId = this.route.snapshot.paramMap.get('id') || '1';
    this.router.navigate(['/compra', peliculaId]);
  }
}