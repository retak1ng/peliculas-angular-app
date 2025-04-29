import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute } from '@angular/router';
import { debounceTime } from 'rxjs';
import { PaginacionDTO } from '../../compartidos/modelos/PaginacionDTO';
import { GeneroDTO } from '../../generos/generos';
import { GenerosService } from '../../generos/generos.service';
import { PeliculasService } from '../../peliculas/peliculas.service';
import { ListadoPeliculasComponent } from "../listado-peliculas/listado-peliculas.component";
import { PeliculaDTO } from '../peliculas';
import { FiltroPeliculas } from './filtroPelicula';

@Component({
  selector: 'app-filtro-peliculas',
  imports: [MatButtonModule, MatPaginatorModule ,MatFormFieldModule, MatInputModule, MatSelectModule, MatCheckboxModule, ReactiveFormsModule, ListadoPeliculasComponent],
  templateUrl: './filtro-peliculas.component.html',
  styleUrl: './filtro-peliculas.component.css'
})
export class FiltroPeliculasComponent implements OnInit{
  generosService = inject(GenerosService);
  peliculasService = inject(PeliculasService);
  paginacion: PaginacionDTO = {pagina: 1, recordsPorPagina: 10};
  cantidadTotalRegistros!: number;


  ngOnInit(): void {
    this.generosService.obtenerTodos().subscribe(generos => {
      this.generos = generos;

      this.leerValoresURL();
      this.buscarPeliculas(this.form.value as FiltroPeliculas);

      this.form.valueChanges
      .pipe(
        debounceTime(300)
      )
      .subscribe(valores => {
        this.buscarPeliculas(valores as FiltroPeliculas);
        this.escribirParametrosBusquerdaEnURL(valores as FiltroPeliculas);
      });
    });
  }

  
  

  buscarPeliculas(valores: FiltroPeliculas) {
    valores.pagina = this.paginacion.pagina;
    valores.recordsPorPagina = this.paginacion.recordsPorPagina;
    
    this.peliculasService.filtrar(valores).subscribe(respuesta => {
      this.peliculas = respuesta.body as PeliculaDTO[];
      const cabecera = respuesta.headers.get('cantidad-total-registros') as string;
      this.cantidadTotalRegistros = parseInt(cabecera, 10);
    });
  }

  escribirParametrosBusquerdaEnURL(valores: FiltroPeliculas) {
    let queryStrings = [];
    if (valores.titulo) {
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }

    if (valores.generoId !== 0) {
      queryStrings.push(`generoId=${valores.generoId}`);
    }
  }

  leerValoresURL() {
    this.activatedRoute.queryParams.subscribe((params:any) => {
      var objeto: any = {};

      if(params.titulo){
        objeto.titulo = params.titulo;
      }

      if(params.generoId){
        objeto.generoId = params.generoId;
      }

      this.form.patchValue(objeto);
    });
  }

  limpiar(){
    this.form.patchValue({titulo: '', generoId: 0 /*,proximosEstrenos: false, enCines: false}*/});
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginacion = {pagina: datos.pageIndex + 1, recordsPorPagina: datos.pageSize};
    this.buscarPeliculas(this.form.value as FiltroPeliculas);
  }  

  private formBuilder = inject(FormBuilder);
  private activatedRoute = inject(ActivatedRoute);
  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    /*
    proximosEstrenos: false,
    enCines: false
    */
  })

  generos!: GeneroDTO[];
  peliculas!: PeliculaDTO[];
}
