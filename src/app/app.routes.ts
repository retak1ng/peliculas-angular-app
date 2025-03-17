import { Routes } from '@angular/router';
import { CrearCinesComponent } from './cines/crear-cines/crear-cines.component';
import { EditarCineComponent } from './cines/editar-cine/editar-cine.component';
import { IndiceCinesComponent } from './cines/indice-cines/indice-cines.component';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'manage', component: ManagePageComponent },
    { path: 'manage/generos', component: IndiceGenerosComponent},
    { path: 'manage/generos/crear', component: CrearGenerosComponent},
    { path: 'manage/generos/editar/:id', component: EditarGeneroComponent},
    { path: 'manage/cines', component: IndiceCinesComponent},
    { path: 'manage/cines/crear', component: CrearCinesComponent},
    { path: 'manage/cines/editar/:id', component: EditarCineComponent},
    { path: 'manage/peliculas/crear', component: CrearPeliculasComponent},
    { path: '**', redirectTo: ''}
];
