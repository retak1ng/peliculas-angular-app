import { AfterViewInit, Component, ComponentRef, inject, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { extraerErrores } from '../../funciones/extraerErrores';
import { IServicioCRUD } from '../../interfaces/IServicioCRUD';
import { SERVICIO_CRUD_TOKEN } from '../../proveedores/proveedores';
import { MostrarErroresComponent } from "../mostrar-errores/mostrar-errores.component";

@Component({
  selector: 'app-crear-entidad',
  imports: [MostrarErroresComponent],
  templateUrl: './crear-entidad.component.html',
  styleUrl: './crear-entidad.component.css'
})
export class CrearEntidadComponent<TDTO, TCreacionDTO> implements AfterViewInit{
  
  ngAfterViewInit(): void {
    this.componentRef = this.contenedorFormulario.createComponent(this.formulario);
    this.componentRef.instance.posteoFormulario.subscribe((entidad: any) => {
      this.guardarCambios(entidad);
    })
  }

  @Input({ required: true})
  titulo!: string;
  @Input({ required: true})
  rutaIndice!: string;
  @Input({ required: true})
  formulario: any;

  errores: string[] = [];
  private router = inject(Router);
  servicioCrud = inject(SERVICIO_CRUD_TOKEN) as IServicioCRUD<TDTO, TCreacionDTO>

  @ViewChild('contenedorFormulario', { read: ViewContainerRef })
  contenedorFormulario!: ViewContainerRef;

  private componentRef!: ComponentRef<any>;

  guardarCambios(entidad: TCreacionDTO){
    //guardamos los cambios
    //this.router.navigate(['manage/generos'])
    //despues de guardar los cambios, me redigira hacia dicha ruta 
    this.servicioCrud.crear(entidad).subscribe({
      next: () => {
        this.router.navigate(['/manage/generos']);
      },
      error: (error) => {
        console.error('Error al crear el género:', error);
        const errores = extraerErrores(error);
        this.errores = errores;
      }
    });
  }
}
