## Usar servicios en angular
Se usa injeccion de dependencia:
```typescript
    router = inject(Router);
```
inject me devolvera una instancia de la clase Router ya construida, para que funciones con nuestro sistema de ruteo.
Nos permite centralizar la logica de instanciacion de servicios.

## Leer desde url
```typescript
//en el componente
export class EditarGeneroComponent {
  @Input({transform: numberAttribute})
  id! : number;
}
//en app.config.ts
provideRouter(routes, withComponentInputBinding())
//en app.routes.ts
{ path: 'manage/generos/editar/:id', component: EditarGeneroComponent}
```