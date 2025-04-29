import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IndiceEntidadComponent } from "../../compartidos/componentes/indice-entidad/indice-entidad.component";
import { SERVICIO_CRUD_TOKEN } from '../../compartidos/proveedores/proveedores';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  imports: [MatButtonModule, MatTableModule, MatPaginatorModule, SweetAlert2Module, IndiceEntidadComponent],
  templateUrl: './indice-generos.component.html',
  styleUrl: './indice-generos.component.css',
  providers: [
    { provide: SERVICIO_CRUD_TOKEN, useClass: GenerosService }
  ]
})
export class IndiceGenerosComponent {
  
}
