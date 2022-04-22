import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exer3',
  templateUrl: './exer3.component.html',
  styleUrls: ['./exer3.component.scss']
})
export class Exer3Component implements OnInit {

  number1 = 0;
  number2 = 0;
  soma = 0;

  constructor() { }

  ngOnInit(): void {
  }
  calcularSoma() {
    this.soma = Number(this.number1) + Number(this.number2);
  }
  calcularSub() {
    this.soma = Number(this.number1) - Number(this.number2);
  }
  calcularX() {
    this.soma = Number(this.number1) * Number(this.number2);
  }
  calcularDiv() {
    this.soma = Number(this.number1) / Number(this.number2);
  }

}
