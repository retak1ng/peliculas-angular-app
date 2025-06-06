import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { construirQueryParams } from '../compartidos/funciones/construirQueryParams';
import { IServicioCRUD } from '../compartidos/interfaces/IServicioCRUD';
import { PaginacionDTO } from '../compartidos/modelos/PaginacionDTO';
import { GeneroCreacionDTO, GeneroDTO } from './generos';
@Injectable({
  providedIn: 'root'
})
export class GenerosService implements IServicioCRUD<GeneroDTO, GeneroCreacionDTO> {
  private http = inject(HttpClient);
  
  private urlBase = environment.apiUrl + 'generos';

  constructor() { }

  public obtenerPaginado(paginacion: PaginacionDTO): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = construirQueryParams(paginacion);
    return this.http.get<GeneroDTO[]>(this.urlBase, {params: queryParams, observe: 'response'});
  }

  public obtenerTodos(): Observable<GeneroDTO[]> {
    return this.http.get<GeneroDTO[]>(`${this.urlBase}/todos`);
  }

  public obtenerPorId(id: number): Observable<GeneroDTO> {
    return this.http.get<GeneroDTO>(`${this.urlBase}/${id}`);
  }

  public actualizar(id: number, genero: GeneroCreacionDTO): Observable<any> {
    return this.http.put(`${this.urlBase}/${id}`, genero);
  }

  public crear(genero: GeneroCreacionDTO): Observable<any> {
    return this.http.post(this.urlBase, genero);

  }

  public borrar(id: number): Observable<any> {
    return this.http.delete(`${this.urlBase}/${id}`)
  }
}
