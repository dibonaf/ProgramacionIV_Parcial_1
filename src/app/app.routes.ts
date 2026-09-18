import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Cartelera } from './pages/cartelera/cartelera';
import { PeliculaDetalle } from './pages/pelicula-detalle/pelicula-detalle';
import { Compra} from './pages/compra/compra';
import { AdminDashboard } from './pages/admin-dashboard/admin-dashboard';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', component: Home },
    { path: 'cartelera', component: Cartelera },
    { path: 'pelicula/:id', component: PeliculaDetalle },
    { path: 'compra/:id', component: Compra },
    { path: 'admin', component: AdminDashboard },
    { path: '**', redirectTo: 'home' }
];
