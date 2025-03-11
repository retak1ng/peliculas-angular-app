import { Component, OnInit } from '@angular/core';
import { ListadoPeliculasComponent } from "../peliculas/listado-peliculas/listado-peliculas.component";
import { PeliculasService } from '../services/peliculas.service';

@Component({
  selector: 'app-landing-page',
  imports: [ListadoPeliculasComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit{
  
  constructor(private peliculasService: PeliculasService) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.peliculasService.peliculas$.subscribe(peliculas => {
        this.listaPeliculas = peliculas;
      })
    }, 3000);
  }

  listaPeliculas! : any[];
}
