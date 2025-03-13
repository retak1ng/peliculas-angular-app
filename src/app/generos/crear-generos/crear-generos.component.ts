import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { FormularioGeneroComponent } from "../formulario-genero/formulario-genero.component";
import { GeneroCreacionDTO } from '../generos';


@Component({
  selector: 'app-crear-generos',
  imports: [MatButtonModule, MatFormFieldModule, ReactiveFormsModule, MatInputModule, FormularioGeneroComponent],
  templateUrl: './crear-generos.component.html',
  styleUrl: './crear-generos.component.css'
})
export class CrearGenerosComponent {
  private router = inject(Router);
  

  guardarCambios(genero: GeneroCreacionDTO){
    //guardamos los cambios
    //this.router.navigate(['manage/generos'])
    //despues de guardar los cambios, me redigira hacia dicha ruta 
    console.log('Creando el genero: ',genero);
  }
}
