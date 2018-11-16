import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {

  nome = 'Estou aqui mesmo';
  // ESTA VARIAVEL ESTÁ VINDO DO APPCOMPONENTE
  // SE EU QUERO TRAZER UMA PROPRIEDADE QUE ESTA EM UM OUTRO COMPONENTE (EXTERNO)
  // IREI CRIAR UMA ANOTACAO INPUT PARA ESTA VARIAVEL QUE SE CHAMA NOME EXTERNO
  // E TAG SELETORA FAZER UM BIND DE PROPRIEDADE DESTA VARIAVEL COM O ELEMENTO DO COMPONENTE
  // EXTERNO: [NOME EXTERNO]= "PROPRIEDADE DEFINIDA NO COMPONENTE EXTERNO"
  @Input() nomeExterno;
  // EVENTO QUE SERÁ USADO NO APPCOMPONENTE

  @Output() myClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  callClick(){
    this.myClick.emit();
  }


}
