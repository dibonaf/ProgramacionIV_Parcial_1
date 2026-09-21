import { Injectable, signal, computed } from '@angular/core';
import { Butaca } from '../models/butaca.model';
import { ProductoCandy } from './candy';

@Injectable({
    providedIn: 'root'
})
export class TicketService {
    private butacasSeleccionadasSignal = signal<Butaca[]>([]);
    private CandySeleccionadosSignal = signal<{ producto: ProductoCandy, cantidad: number }[]>([]);
    private funcionSeleccionadaSignal = signal<{ dia: string, hora: string, formato: string, idioma: string } | null>(null);

    get funcionSeleccionada() {
        return this.funcionSeleccionadaSignal.asReadonly();
    }

    get butacasSeleccionadas() {
        return this.butacasSeleccionadasSignal.asReadonly();
    }

    get CandySeleccionados() {
        return this.CandySeleccionadosSignal.asReadonly();
    }

    setButacas(butacas: Butaca[]) {
        this.butacasSeleccionadasSignal.set(butacas);
    }


    setFuncion(dia: string, hora: string, formato: string, idioma: string) {
        this.funcionSeleccionadaSignal.set({ dia, hora, formato, idioma });
    }

    setCandy(candy: { producto: ProductoCandy, cantidad: number }[]) {
        this.CandySeleccionadosSignal.set(candy);
    }

    totalFinal = computed(() => {
        const totalButacas = this.butacasSeleccionadasSignal().reduce((acc, b) => acc + (b.tipo === 'VIP' ? 7500 : 5000), 0);
        const totalCandy = this.CandySeleccionadosSignal().reduce((acc, item) => acc + (item.producto.precio * item.cantidad), 0);

        return totalButacas + totalCandy;
    });
}
