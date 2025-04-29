import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { extraerErrores } from '../../compartidos/funciones/extraerErrores';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { PeliculaCreacionDTO } from '../peliculas';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-crear-peliculas',
  imports: [FormularioPeliculasComponent, MostrarErroresComponent],
  templateUrl: './crear-peliculas.component.html',
  styleUrl: './crear-peliculas.component.css'
})
export class CrearPeliculasComponent {

  generosSeleccionados: SelectorMultipleDTO[] = [];

  generosNoSeleccionados: SelectorMultipleDTO[] = [];

  //cinesSeleccionados: SelectorMultipleDTO[] = [];

  //cinesNoSeleccionados: SelectorMultipleDTO[] = [];
  peliculasService = inject(PeliculasService);
  router = inject(Router);
  errores: string[] = [];
  constructor() {
    this.peliculasService.crearGet().subscribe(modelo => {
      this.generosNoSeleccionados = modelo.generos.map(genero => {
        return <SelectorMultipleDTO>{ llave: genero.id, valor: genero.nombre };
      });
      //this.cinesNoSeleccionados = respuesta.cines.map(cine => {
      //  return { llave: cine.id, valor: cine.nombre };
      //});
    });
  }

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    this.peliculasService.crear(pelicula).subscribe({
      next: pelicula => {
        console.log(pelicula);
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error(error);
        const errores = extraerErrores(error);
        this.errores = errores;
      }
    });
  }
}
