import { Injectable, signal } from '@angular/core';
import { Butaca, TipoButaca } from '../models/butaca.model';

@Injectable({
    providedIn: 'root'
})
export class ButacaService {
    // Encapsulamos el estado de las butacas
    private butacasSignal = signal<Butaca[]>(this.generarSala());

    // Exponemos la señal de solo lectura
    get butacas() {
        return this.butacasSignal.asReadonly();
    }

    // Método privado que construye la matriz de la sala al iniciar el servicio
    private generarSala(): Butaca[] {
        const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
        const sala: Butaca[] = [];
        let idCounter = 1;

        letras.forEach(fila => {
            let tipo: TipoButaca = 'Normal';
            let totalAsientos = 28; // Configuración estándar (4 + 20 + 4)

            // Reglas de negocio según requerimientos
            if (fila === 'R' || fila === 'S' || fila === 'T') {
                tipo = 'VIP';
            } else if (fila === 'J' || fila === 'K') {
                tipo = 'Accesible';
                totalAsientos = 14; // Configuración reducida (2 + 10 + 2)
            }

            // Generamos los asientos para la fila actual
            for (let i = 1; i <= totalAsientos; i++) {
                sala.push({
                    id: idCounter++,
                    fila: fila,
                    numero: i,
                    tipo: tipo,
                    estado: 'Disponible'
                });
            }
        });

        return sala;
    }
}