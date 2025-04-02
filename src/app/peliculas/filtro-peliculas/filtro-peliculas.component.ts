import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PeliculasService } from '../../services/peliculas.service';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { FiltroPeliculas } from './filtroPelicula';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, ReactiveFormsModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit{
  private formBuilder = inject(FormBuilder);

  constructor(private peliculasService: PeliculasService) { }
  listaPeliculas!: any[];
  peliculasFiltradas = this.listaPeliculas;
  ngOnInit(): void {
    this.peliculasService.peliculas$.subscribe(peliculas => {
        this.listaPeliculas = peliculas;
    });

    this.form.valueChanges.subscribe(valores => {
      this.peliculasFiltradas = this.listaPeliculas;
      this.buscarPeliculas(valores as FiltroPeliculas)
    });
  }

  
  

  buscarPeliculas(valores: FiltroPeliculas) {
    if(valores.titulo){
      this.peliculasFiltradas = this.peliculasFiltradas.filter(pelicula => pelicula.title.indexOf(valores.titulo) !== -1)
    }

    if(valores.generoId !== 0){
      this.peliculasFiltradas = this.peliculasFiltradas.filter(pelicula => pelicula.genreId.indexOf(valores.generoId) !== -1)
    }

    if(valores.proximosEstrenos){
      this.peliculasFiltradas = this.peliculasFiltradas.filter(pelicula => pelicula.nextRealease);
    }

    if(valores.enCines){
      this.peliculasFiltradas = this.peliculasFiltradas.filter(pelicula => pelicula.inCinema);
    }
  }

  limpiar(){
    this.form.patchValue({titulo: '', generoId: 0, proximosEstrenos: false, enCines: false});
  }

  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false
  })

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Action' },
    { id: 3, nombre: 'Comedy' },
  ]

}
