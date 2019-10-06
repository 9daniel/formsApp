import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.page.html',
  styleUrls: ['./bar.page.scss'],
})
export class BarPage implements OnInit {

  constructor() { }

  public listaCompras = [];
  public produto = {};
  public listaProdutos = [
    this.produto = {nome:'Whisky', valor: 99, nome1:'R$ 99,00'},
    this.produto = {nome:'Cerveja', valor: 12,nome1:'R$ 12,00'},
    this.produto = {nome:'Suco Natural', valor: 8, nome1:'R$ 8,00'},
    this.produto = {nome:'Hamburguer', valor: 9, nome1:'R$ 9,00'},
    this.produto = {nome:'Caipirinha', valor: 6, nome1:'R$ 6,00'}

 ];

  ngOnInit() {
  }
  
  public quantWhisky = 0;
  public quantCerveja = 0;
  public quantSuco = 0;
  public quantHamburguer = 0;
  public quantCaipirinha = 0;
  public valorTotal = 0;

  public addWhisky() {
    
    this.valorTotal = this.valorTotal + this.listaProdutos[0].valor;
    this.quantWhisky++;
  }
  public tiraWhisky() {
    
    if(this.quantWhisky >= 1 ){

    this.valorTotal = this.valorTotal - this.listaProdutos[0].valor;
    this.quantWhisky--;
    }  
  }

  public addCerveja() {
    
    this.valorTotal = this.valorTotal + this.listaProdutos[1].valor;
    this.quantCerveja++;
  }

  public tiraCerveja() {
    
    if(this.quantCerveja >= 1){

      this.valorTotal = this.valorTotal - this.listaProdutos[1].valor;
    this.quantCerveja--;
    }   
  }

  public addSuco() {
    
    this.valorTotal = this.valorTotal + this.listaProdutos[2].valor;
    this.quantSuco++;
  }
  public tiraSuco() {
    
    if(this.quantSuco >= 1){

      this.valorTotal = this.valorTotal - this.listaProdutos[2].valor;
    this.quantSuco--;
    }
  }

  public addHamburgue() {
    
    this.valorTotal = this.valorTotal + this.listaProdutos[3].valor;
    this.quantHamburguer++;
  }
  public tiraHamburgue() {
    
    if(this.quantHamburguer >= 1){

      this.valorTotal = this.valorTotal + this.listaProdutos[3].valor;
    this.quantHamburguer--;
    }
  }

  public addCaipirinha() {
    
    this.valorTotal = this.valorTotal + this.listaProdutos[4].valor;
    this.quantCaipirinha++;
  }
  public tiraCaipirinha() {
    
    if(this.quantCaipirinha >= 1){

      this.valorTotal = this.valorTotal + this.listaProdutos[4].valor;
    this.quantCaipirinha--;
    }
  }

// teste 
  public addProduto(item){
    let posicao: number = this.listaProdutos.indexOf(item);
    //if(item.nome == "Whisky"){
    //this.quantWhisky++;}
    //if(item.nome == "Cerveja"){
    //this.quantCerveja++;}
    //if(item.nome == "Suco Natural"){
    //this.quantSuco++;}
    //if(item.nome == "Hamburguer"){
    //this.quantHamburguer++;}
    //if(item.nome == "Caipirinha"){
    //this.quantCaipirinha++;}
    this.valorTotal += this.listaProdutos[posicao].valor;
    this.listaCompras.push(this.listaProdutos[posicao]);
    console.log(this.listaCompras);
  }
  dadosCompra(){  
    alert(
    "<---------------- Lista de Produtos -------------->" + '\n' +

    'Whisky = ' + this.quantWhisky + '\n'+
    'Cerveja = ' + this.quantCerveja+ '\n'+
    'Suco Natural = ' + this.quantSuco + '\n'+
    'Hamburguer = ' + this.quantHamburguer + '\n'+
    'Caipirinha = ' + this.quantCaipirinha + '\n'+'\n' +
    
    "<---------------- Total ----------------->" + '\n' +
    'Valor a Pagar: ' + this.valorTotal + ",00");
  }
}
