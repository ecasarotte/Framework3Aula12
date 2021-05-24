import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fornecedores';
  exibirBotoes: boolean = true;

  exibir(): void{
    this.exibirBotoes = !this.exibirBotoes;
  }
}
