import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  informacoes ={
    nome: '',
    idade: '25',
    email: 't@t.com',
    telefone: '',
    skype: '',
    cor: ''
  }

  constructor() { }

  ngOnInit() {
  }

  // SUBMISSAO DO FORMULARIO, TIPANDO O MYFORM COMO NGFORM TEM-SE ACESSO AOS METODOS DELE
  onSubmit(myForm) {
    console.log(myForm);
  }

}
