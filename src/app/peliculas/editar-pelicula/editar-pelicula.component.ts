import { Component, Input, numberAttribute } from '@angular/core';
import { SelectorMultipleDTO } from '../../compartidos/componentes/selector-multiple/SelectorMultipleModelo';
import { FormularioPeliculasComponent } from "../formulario-peliculas/formulario-peliculas.component";
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas';

@Component({
  selector: 'app-editar-pelicula',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-pelicula.component.html',
  styleUrl: './editar-pelicula.component.css'
})
export class EditarPeliculaComponent {
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {
    id: 1,
    titulo: 'Pelicula de prueba',
    trailer: 'https://www.youtube.com/watch?v=example',
    fechaLanzamiento: new Date('2023-01-01'),
  }

  generosSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Comedy' },
    { llave: 3, valor: 'Terror' },
  ];

  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Action' },
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
    console.log('Editando pelicula', pelicula);
  }
}
