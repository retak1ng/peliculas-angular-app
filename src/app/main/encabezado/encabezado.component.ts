import { Component, ElementRef, HostListener } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AutorizadoComponent } from "../../seguridad/autorizado/autorizado.component";
import { PeliculasService } from '../../services/peliculas.service';


@Component({
  selector: 'app-encabezado',
  imports: [ReactiveFormsModule, FormsModule, RouterLink, MatIconModule, MatFormFieldModule, MatInputModule, AutorizadoComponent],
  templateUrl: './encabezado.component.html',
  styleUrl: './encabezado.component.css'
})
export class EncabezadoComponent {
  name: string = "Diagonals Movies"
  mostrarMenuCategorias: boolean = false;
  mostrarBuscador: boolean = false;

  constructor(private peliculasService: PeliculasService, private elementRef: ElementRef) {}

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

  mostrarCategorias() {
    this.mostrarMenuCategorias = true;
  }

  ocultarCategorias() {
    this.mostrarMenuCategorias = false;
  }

  onMostrarBuscador() {
    this.mostrarBuscador = true;
  }
  
  @HostListener('document:click', ['$event'])
  ocultarBuscador(event: Event) {
    if(this.mostrarBuscador && !this.elementRef.nativeElement.contains(event.target)){
      this.mostrarBuscador = false;
    }
  }
}
