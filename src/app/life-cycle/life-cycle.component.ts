import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrls: ['./life-cycle.component.css']
})
export class LifeCycleComponent implements OnInit, OnDestroy {


  constructor() { }


  //METEDO QUE EXECUTA ACOES QUANDO O COMPONENTE É CRIADO
  ngOnInit() {
    console.log('Componente criado!')
  }

  // METODO QUE EXECUTA ACOES QUANDO O COMPONENTE É DESTRUIDO, OU SEJA,
  // QUANDO O CONTEUDO VINDO DO TEMPLATE TIVER SIDO REMOVIDO
  ngOnDestroy() {
    console.log('O Componente foi destruído')
  }
}
