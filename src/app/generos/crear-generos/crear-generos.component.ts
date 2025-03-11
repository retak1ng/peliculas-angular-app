import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  router = inject(Router);
  guardarCambios(){
    //guardamos los cambios
    this.router.navigate(['manage/generos'])
    //despues de guardar los cambios, me redigira hacia dicha ruta 
  }
}
