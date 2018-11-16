import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  // VARIAVEL QUE IRÁ DEFINIR O ESTADO DE VIDA DO COMPONENTE
  isVisible = true;
  // FUNCAO QUE IRA MATAR O COMPONENTE 2S APOS SER CRIADO
  constructor() {
    setTimeout(() => {
      this.isVisible = false;
    }, 2000)
  }
}
