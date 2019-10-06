import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.page.html',
  styleUrls: ['./objetos.page.scss'],
})

export class ObjetosPage implements OnInit {

  public nome;
  public telefone;

  public pessoa = {};//{} se refere a um objeto

  constructor() {   
   }

  ngOnInit() {
  }

  public limpar() {
    this.pessoa = {};
  }

}
