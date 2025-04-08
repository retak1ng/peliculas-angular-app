import { Component } from '@angular/core';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { PeliculaCreacionDTO } from '../peliculas';

@Component({
  selector: 'app-crear-peliculas',
  imports: [FormularioPeliculasComponent],
  templateUrl: './crear-peliculas.component.html',
  styleUrl: './crear-peliculas.component.css'
})
export class CrearPeliculasComponent {

  generosSeleccionados: SelectorMultipleDTO[] = [
    
  ];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Action' },
    { llave: 2, valor: 'Comedy' },
    { llave: 3, valor: 'Terror' },
    { llave: 4, valor: 'Drama' },
    { llave: 5, valor: 'Documental' },
    { llave: 6, valor: 'Ciencia Ficcion' }
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = [
    
  ];

  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'City' },
    { llave: 2, valor: 'Rocha' },
    { llave: 3, valor: 'San Martin' },
  ];

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log('Creando pelicula',pelicula);
  }
}
