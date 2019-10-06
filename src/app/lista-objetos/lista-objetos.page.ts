import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-objetos',
  templateUrl: './lista-objetos.page.html',
  styleUrls: ['./lista-objetos.page.scss'],
})
export class ListaObjetosPage implements OnInit {

  constructor() { }

  public pessoa = {};

  public listaPessoas = [];
  ngOnInit() {
  }

  public addPessoa(){
    this.listaPessoas.push(this.pessoa);
    this.pessoa = {};
    console.log(this.listaPessoas);
  }

  public limpar(){
    this.listaPessoas = [];
  }

  public removePessoa(item){
    let posicao: number = this.listaPessoas.indexOf(item);

    if(posicao != -1){
      this.listaPessoas.splice(posicao, 1);
    }
  }

  public alteraPessoa(item){
    this.pessoa = item;
  }
}
