import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public nome;
  public email;
  public idade;

  public exibeDados() {
    alert(
      "Nome: " + this.nome +
      "\nE-mail: " + this.email +
      "\nIdade: " + this.idade +
      "\nAno Nascimento: " + (2019 - this.idade));
  }

}
