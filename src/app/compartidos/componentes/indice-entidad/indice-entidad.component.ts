import { HttpResponse } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { IServicioCRUD } from '../../interfaces/IServicioCRUD';
import { PaginacionDTO } from '../../modelos/PaginacionDTO';
import { SERVICIO_CRUD_TOKEN } from '../../proveedores/proveedores';
import { ListadoGenericoComponent } from "../listado-generico/listado-generico.component";

@Component({
  selector: 'app-indice-entidad',
  imports: [ListadoGenericoComponent, RouterLink, MatButtonModule, MatTableModule, MatPaginatorModule, SweetAlert2Module],
  templateUrl: './indice-entidad.component.html',
  styleUrl: './indice-entidad.component.css'
})
export class IndiceEntidadComponent<TDTO, TCreacionDTO> {
  @Input({ required: true })
  titulo!: string;
  @Input({ required: true })
  rutaCrear!: string;
  @Input({ required: true })
  rutaEditar!: string;
  @Input()
  columnasAMostrar = ['id', 'nombre', 'acciones'];

  servicioCRUD = inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCreacionDTO>;

  paginacion: PaginacionDTO = { pagina: 1, recordsPorPagina: 5 };
  entidades!: TDTO[]
  cantidadTotalRegistros!: number;

  constructor() { 
    this.cargarRegistros();
  }

  cargarRegistros() {
    this.servicioCRUD.obtenerPaginado(this.paginacion).subscribe((respuesta: HttpResponse<TDTO[]>) => {
      this.entidades = respuesta.body as TDTO[];
      const cabecera = respuesta.headers.get('cantidad-total-registros') as string;
      this.cantidadTotalRegistros = parseInt(cabecera, 10);
    })
  }

  actualizarPaginacion(datos: PageEvent) {
    this.paginacion = {pagina: datos.pageIndex + 1, recordsPorPagina: datos.pageSize};
    this.cargarRegistros();
  }

  borrar(id: number) {
    this.servicioCRUD.borrar(id).subscribe(() => {
      this.paginacion = {pagina: 1, recordsPorPagina: 5};
      this.cargarRegistros();
    })
  }

}
