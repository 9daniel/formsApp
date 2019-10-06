import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  public valor1;
  public valor2;
  public operacao;
  public resultado;
  constructor() { }

  ngOnInit() {
  }

  public soma() {
    this.operacao = "SOMA";
    this.resultado = this.valor1 + this.valor2;
  }

  public subtracao() {
    this.operacao = "SUBTRAÇÃO";
    this.resultado = this.valor1 - this.valor2;
  }

  public divisao() {
    this.operacao = "DIVISÃO";
    this.resultado = this.valor1 / this.valor2;
  }

  public multiplicacao() {
    this.operacao = "MULTIPLICAÇÃO";
    this.resultado = this.valor1 * this.valor2;
  }

  public limpar() {
    this.valor1 = null;
    this.valor2 = null;
    this.operacao = "LIMPO";
    this.resultado = null;
  }

}
