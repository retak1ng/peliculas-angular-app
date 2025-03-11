import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ListadoGenericoComponent } from "../../compartidos/componentes/listado-generico/listado-generico.component";
@Component({
  selector: 'app-listado-peliculas',
  imports: [ListadoGenericoComponent, MatIconModule],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css'
})
export class ListadoPeliculasComponent{
  @Input({required: true})
  listaPeliculas! : any[]

  titulo = "Todas las peliculas"
  
  mostrarInfo: Set<number> = new Set();

}
