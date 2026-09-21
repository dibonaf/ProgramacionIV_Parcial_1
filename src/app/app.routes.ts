import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cartelera } from './pages/cartelera/cartelera';
import { PeliculaDetalle } from './pages/pelicula-detalle/pelicula-detalle';
import { SeleccionFuncion } from './pages/seleccion-funcion/seleccion-funcion';
import { Compra } from './pages/compra/compra';
import { CandyBar } from './pages/candy-bar/candy-bar';
import { Pago } from './pages/pago/pago';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'cartelera', component: Cartelera },
    { path: 'pelicula/:id', component: PeliculaDetalle },
    { path: 'funcion/:id', component: SeleccionFuncion },
    { path: 'compra/:id', component: Compra },
    { path: 'candy', component: CandyBar },
    { path: 'pago', component: Pago },
    { path: '**', redirectTo: '' }
];