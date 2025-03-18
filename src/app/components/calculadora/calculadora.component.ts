import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {

  textoEnPantalla:string = '';
  numeroUno:string = '';
  numeroDos:string = '';
  indiceOperador:string = '';
  textoEnPantallaResultado!:number;

  btnBorrarTextoPorTexto():void{
    if(this.indiceOperador.length > 0){      if(this.numeroDos.length > 0){
        this.numeroDos = this.numeroDos.slice(0, this.numeroDos.length-1);
        this.textoEnPantallaResultado = 0;
      } else {
        this.indiceOperador = '';
        this.numeroUno = this.numeroUno.slice(0, this.numeroUno.length-1);
      }
    } else {
      this.numeroUno = this.numeroUno.slice(0, this.numeroUno.length-1);
    }
  }

  btnBorrarTexto(){
    this.numeroUno = '';
    this.numeroDos = '';
    this.indiceOperador = '';
    this.textoEnPantallaResultado = 0;
  }

  calculo(numero:string):void{
    if(this.indiceOperador == ''){
      this.numeroUno = this.numeroUno + numero;
    } else {
      this.numeroDos = this.numeroDos + numero;
    }
  }

  tipoCalculo(tipoCalculo:string):void{
    this.indiceOperador = tipoCalculo;
  }

  resultadoCalculo():void{

    const numeroUno = parseFloat(this.numeroUno);
    const numeroDos = Number(this.numeroDos);

    switch(this.indiceOperador){
      case 'suma':
        this.textoEnPantallaResultado = numeroUno + numeroDos;
        break;
      case 'resta':
        this.textoEnPantallaResultado = numeroUno - numeroDos;
        break;
      case 'multiplicar':
        this.textoEnPantallaResultado = numeroUno * numeroDos;
        break;
      case 'dividir':
        this.textoEnPantallaResultado = numeroUno / numeroDos;
        break;
    }
  }
}
