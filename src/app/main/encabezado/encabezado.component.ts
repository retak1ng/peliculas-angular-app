import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-encabezado',
  imports: [ RouterLink, MatIconModule ],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  name: string = "Diagonals Movies"

  constructor(private peliculasService: PeliculasService) {}

  onFiltrarEstreno() {
    this.peliculasService.filtrarPorEstrenos();
  }

  onFiltrarTendencia() {
    this.peliculasService.filtrarPorTendencias();
  }

  onFiltrarMasVista() {
    this.peliculasService.filtrarPorMasVistas();
  }

  onResetClick() {
    this.peliculasService.resetearFiltro();
  }
}
