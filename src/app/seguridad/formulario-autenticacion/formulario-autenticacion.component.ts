import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MostrarErroresComponent } from "../../compartidos/componentes/mostrar-errores/mostrar-errores.component";
import { CredencialesUsuarioDTO } from '../seguridad';

@Component({
  selector: 'app-formulario-autenticacion',
  imports: [MostrarErroresComponent, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule],
  templateUrl: './formulario-autenticacion.component.html',
  styleUrl: './formulario-autenticacion.component.css'
})
export class FormularioAutenticacionComponent {
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    email: ['', {Validators: [Validators.required, Validators.email]}],
    password: ['', {Validators: [Validators.required]}],
  });

  @Input({required: true})
  titulo!: string;
  @Input()
  errores: string[] = [];
  @Output()
  posteoFormulario = new EventEmitter<CredencialesUsuarioDTO>();

  obtenerMensajeErrorEmail(){
    let campo = this.form.controls.email;
    if(campo.hasError('required')){
      return 'El campo email es requerido';
    }
    if(campo.hasError('email')){
      return 'El email no es valido';
    }
    return '';
  }

  obtenerMensajeErrorPassword(){
    let campo = this.form.controls.email;
    if(campo.hasError('required')){
      return 'El campo contraseña es requerido';
    }
    return '';
  }

  guardarCambios(){
    if(!this.form.valid){
      return;
    }
    const credenciales = this.form.value as CredencialesUsuarioDTO;
    this.posteoFormulario.emit(credenciales);
  }

}
