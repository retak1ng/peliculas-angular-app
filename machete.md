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

## Usar un mapa para seleccionar la ubicación
Instalar 
```typescript
npm i leaflet

npm i @bluehalo/ngx-leaflet

npm i --save-dev @types/leaflet
```

angular.json:
```json
"architect":{
  "build": {
    ...,  
    "options":{
      ...,
      "assets": [
        ..., {
          "glob": "**/*",
          "input": "./node_modules/leaflet/dist/images",
          "output": "assets/"
        }
      ],
      "styles": [
        ...,
        ".node_modules/leaflet/dist/leaflet.css"
      ],
    },
  },
},
```

## Observable
```typescript
public obtenerTodos(): Observable<GeneroDTO[]> {}
```
Es muy similiar a una promesa, representa un valor que va a retornar algo en el futuro.