import { Component, Input, numberAttribute } from '@angular/core';
import { EditarEntidadComponent } from "../../compartidos/componentes/editar-entidad/editar-entidad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-editar-genero',
  imports: [EditarEntidadComponent],
  templateUrl: './editar-genero.component.html',
  styleUrl: './editar-genero.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass: GenerosService}
  ]
})
export class EditarGeneroComponent {
  
  @Input({transform: numberAttribute})
  id! : number;

  formularioGeneros = FormularioGeneroComponent;
}
