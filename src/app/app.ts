import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {

  protected readonly title = signal('IntroAngular');
  titulo: string = "Jassiel Vazquez";
  
  // Agregamos la propiedad suma para que Angular la reconozca en el HTML
  suma: number = 2 + 2;

  duplicaNumero(num: number): number {
    return num * 2;
  }

  pelicula = {
    titulo: "El padrino",
    anio: 1972,
    genero: "Crimen/Drama",
    fechaLanzamiento: new Date(),
    precio: 345
  };
  
}