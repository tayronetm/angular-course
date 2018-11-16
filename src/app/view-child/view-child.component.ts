import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {

  nome = 'View child';
  // PARA TER ACESSO A UM CAMPO DO TEMPLATE
  @ViewChild('variavelTemplate') meuElemento: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.meuElemento);
  }

}
