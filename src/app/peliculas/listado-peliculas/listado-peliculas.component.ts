import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
import { PeliculasService } from '../peliculas.service';
@Component({
  selector: 'app-listado-peliculas',
  imports: [ListadoGenericoComponent, MatIconModule, RouterLink, SweetAlert2Module],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent{
  @Input({required: true})
  listaPeliculas! : any[]
  
  mostrarInfo: Set<number> = new Set();

  peliculasService = inject(PeliculasService);

  @Output()
  borrado = new EventEmitter<void>();

  borrar(id: number) {
    this.peliculasService.borrar(id)
      .subscribe(() => this.borrado.emit())
  }
}
