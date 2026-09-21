import { Injectable, signal } from '@angular/core';

export interface ProductoCandy {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    imagen: string;
}

@Injectable({
    providedIn: 'root'
})
export class CandyService {
    private productosSignal = signal<ProductoCandy[]>([
        {
            id: 1,
            nombre: 'Combo Mega',
            descripcion: '1 Pochoclo Gigante + 2 Gaseosas Grandes',
            precio: 12000,
            imagen: 'assets/mega.jpg'
        },
        {
            id: 2,
            nombre: 'Combo Pareja',
            descripcion: '1 Pochoclo Mediano + 2 Gaseosas Medianas',
            precio: 9500,
            imagen: 'assets/pareja.jpg'
        },
        {
            id: 3,
            nombre: 'Pochoclo Solo',
            descripcion: 'Balde gigante de pochoclos dulces o salados',
            precio: 6000,
            imagen: 'assets/pochoclo.jpg'
        }
    ]);

    get productos() {
        return this.productosSignal.asReadonly();
    }
}