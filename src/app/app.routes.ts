import { Routes } from '@angular/router';
import { esAdminGuard } from './compartidos/guards/es-admin.guard';
import { CrearGenerosComponent } from './generos/crear-generos/crear-generos.component';
import { EditarGeneroComponent } from './generos/editar-genero/editar-genero.component';
import { IndiceGenerosComponent } from './generos/indice-generos/indice-generos.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ManagePageComponent } from './manage-page/manage-page.component';
import { CrearPeliculasComponent } from './peliculas/crear-peliculas/crear-peliculas.component';
import { EditarPeliculaComponent } from './peliculas/editar-pelicula/editar-pelicula.component';
import { FiltroPeliculasComponent } from './peliculas/filtro-peliculas/filtro-peliculas.component';
import { IndicePeliculasComponent } from './peliculas/indice-peliculas/indice-peliculas.component';
import { LoginComponent } from './seguridad/login/login.component';


export const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'manage', component: ManagePageComponent, canActivate: [esAdminGuard] },
    { path: 'manage/generos', component: IndiceGenerosComponent, canActivate: [esAdminGuard]},
    { path: 'manage/generos/crear', component: CrearGenerosComponent, canActivate: [esAdminGuard]},
    { path: 'manage/generos/editar/:id', component: EditarGeneroComponent, canActivate: [esAdminGuard]},
    /*{ path: 'manage/cines', component: IndiceCinesComponent},
    { path: 'manage/cines/crear', component: CrearCinesComponent},
    { path: 'manage/cines/editar/:id', component: EditarCineComponent},*/
    { path: 'manage/peliculas', component: IndicePeliculasComponent, canActivate: [esAdminGuard]},
    { path: 'manage/peliculas/crear', component: CrearPeliculasComponent, canActivate: [esAdminGuard]},
    { path: 'manage/peliculas/editar/:id', component: EditarPeliculaComponent, canActivate: [esAdminGuard]},
    { path: 'manage/peliculas/filtrar', component: FiltroPeliculasComponent},
    /*{ path: 'manage/peliculas/:id', component: DetallePeliculaComponent},*/
    { path: 'login', component: LoginComponent},
    { path: '**', redirectTo: ''}
];
