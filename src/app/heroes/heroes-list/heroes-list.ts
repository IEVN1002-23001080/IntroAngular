import { Component } from '@angular/core';
import { IHeroes } from '../heroes';

@Component({
  selector: 'app-heroes-list',
  standalone: false,
  styleUrl: './heroes-list.css',
  templateUrl: './heroes-list.html',
})
export class HeroesList {

  imageWidth: number = 40;
  imageMargin: number = 2;
  muestraImage: boolean = true;
  listFilter: string = '';

  showImage(): void {
    this.muestraImage = !this.muestraImage;
  }

  heroes: IHeroes[] = [
    {
      imagen: "https://dragonball-api.com/characters/goku_normal.webp",
      nombre: "GOKU",
      descripcion: "PODER ALTO",
      race: "SAIYAN",
      ki: 9000
    },
    {
      imagen: "https://dragonball-api.com/characters/picolo_normal.webp",
      nombre: "PICCOLO",
      descripcion: "PODER MEDIO",
      race: "NAMEKIAN",
      ki: 5000
    },
    {
      imagen: "https://dragonball-api.com/characters/vegeta_normal.webp",
      nombre: "VEGETA",
      descripcion: "PODER ALTO",
      race: "SAIYAN",
      ki: 8000
    },
    {
      imagen: "https://dragonball-api.com/characters/bulma.webp",
      nombre: "BULMA",
      descripcion: "PODER LEGENDARIO",
      race: "HUMAN",
      ki: 12000
    }
  ];

}