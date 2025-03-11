import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-encabezado-manage',
  imports: [ MatIconModule, MatButtonModule, RouterLink ],
  templateUrl: './encabezado-manage.component.html',
  styleUrl: './encabezado-manage.component.css'
})
export class EncabezadoManageComponent {

}
