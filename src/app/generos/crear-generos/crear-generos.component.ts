import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CrearEntidadComponent } from "../../compartidos/componentes/crear-entidad/crear-entidad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GenerosService } from '../generos.service';


@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, CrearEntidadComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css',
  providers: [
    {provide: SERVICIO_CRUD_TOKEN, useClass: GenerosService}
  ]
})
export class CrearGenerosComponent {
  formularioGeneros = FormularioGeneroComponent;
}
