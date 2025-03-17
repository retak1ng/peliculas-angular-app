import { Component, Input, numberAttribute } from '@angular/core';
import { CineCreacionDTO, CineDTO } from '../cines';
import { FormularioCinesComponent } from "../formulario-cines/formulario-cines.component";

@Component({
  selector: 'app-editar-cine',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cine.component.html',
  styleUrl: './editar-cine.component.css'
})
export class EditarCineComponent {
  @Input({transform: numberAttribute})
  id!: number;

  cine: CineDTO = { id: 1, nombre: 'Cinema La Plata', latitud: -34.91693849113268, longitud: -57.94936611510867}

  guardarCambios(cine: CineCreacionDTO){
    console.log('Editar Cine: ', cine)
  }
}
