import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { EncabezadoManageComponent } from "./main/encabezado-manage/encabezado-manage.component";
import { EncabezadoComponent } from "./main/encabezado/encabezado.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EncabezadoComponent, EncabezadoManageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{
  isAdmin = false;

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      // Comprobar si el evento es NavigationEnd, para asegurarse de que la ruta se haya cargado completamente
      if (event instanceof NavigationEnd) {
        this.isAdmin = this.router.url.startsWith('/manage');  // Asegúrate de que el path comienza con "/manage"
      }
    });
  }
}
