import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { extraerErrorIdentity } from '../../compartidos/funciones/extraerErrores';
import { FormularioAutenticacionComponent } from "../formulario-autenticacion/formulario-autenticacion.component";
import { CredencialesUsuarioDTO } from '../seguridad';
import { SeguridadService } from '../seguridad.service';

@Component({
  selector: 'app-login',
  imports: [FormularioAutenticacionComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  seguridadService = inject(SeguridadService);
  router = inject(Router);
  errores: string[] = [];

  loguear(credenciales: CredencialesUsuarioDTO) {
    this.seguridadService.login(credenciales).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: err => {
        const errores = extraerErrorIdentity(err);
        this.errores = errores;
      }
    });
  }
}
