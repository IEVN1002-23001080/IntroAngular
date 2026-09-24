import { Component } from '@angular/core';

@Component({
  selector: 'app-figuras',
  standalone: false,
  templateUrl: './figuras.html',
})


export class Figuras {

num1:string="";
num2:string="";
resultado:number=0;
operacion:string="";


  triangulo(): void {
    this.resultado = (parseInt(this.num1) * parseInt(this.num2))/2;
  
  }
  rectangulo(): void {
    this.resultado = parseInt(this.num1) * parseInt(this.num2);
  
  }
  circulo(): void {
    this.resultado = (parseInt(this.num1)*2)*3.1416;
  
  }
  pentagono(): void {
    this.resultado = (parseInt(this.num1) * parseInt(this.num2))/2;
  
  }

  calcular(): void {

    if (this.operacion === 'triangulo') {
      this.triangulo();
    }

    if (this.operacion === 'rectangulo') {
      this.rectangulo();
    }

    
    if (this.operacion === 'circulo') {
      this.circulo();
    }

    
    if (this.operacion === 'pentagono') {
      this.pentagono();
    }

  }

}