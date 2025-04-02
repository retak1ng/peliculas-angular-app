import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-indice-peliculas',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './indice-peliculas.component.html',
  styleUrl: './indice-peliculas.component.css'
})
export class IndicePeliculasComponent {

}
