import { Component } from '@angular/core';

@Component({
  selector: 'app-distancia',
  standalone: false,
  templateUrl: './distancia.html',
})


export class Distancia {

num1:string="";
num2:string="";
num3:string="";
num4:string="";
resultado:number=0;


 calcular(): void {

  this.resultado = (
    (parseInt(this.num3) - parseInt(this.num1)) *
    (parseInt(this.num3) - parseInt(this.num1)) +
    (parseInt(this.num4) - parseInt(this.num2)) *
    (parseInt(this.num4) - parseInt(this.num2))
  ) ** 0.5;

}

}