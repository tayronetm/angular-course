import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  // PARA ACESSAR ELEMENTOS DO TEMPLATE NO CASO O FORMULÁRIO,
  // ESTE ACESSO É FEITO PELO elTemplate POR MEIO DO VIEWCHILD
  @ViewChild('myForm') elTemplate;

  informacoes ={
    nome: '',
    idade: '25',
    email: 't@t.com',
    telefone: '',
    skype: '',
    cor: ''
  }

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    console.log()
  }

  // SUBMISSAO DO FORMULARIO, TIPANDO O MYFORM COMO NGFORM TEM-SE ACESSO AOS METODOS DELE
  onSubmit(myForm: NgForm) {
    console.log(myForm);
  }

  getAddress(cep) {
    this.httpClient.get(`http://viacep.com.br/ws/${cep}/json/`)
      .subscribe(
        endereco => {
          // AQUI ESTOU DIZENDO QUE O OBJETO ENDERECO VINDO
          // DA API SEJA SETADO COMO VALOR DO FORM, NO METODO SETVALUE O OBJETO PRECISA
          // SER PASSADO INTEIRO

          // const valorForm = this.elTemplate.value;
          // valorForm.endereco.bairro = 'meu bairro';
          // this.elTemplate.setValue(valorForm)

          // PARA PASSAR APENAS UMA PARTE DO OBJETO, A PARTE QUE CONTEM APENAS O
          // ENDERECO USEI O PATCHVALUE

          // this.elTemplate.form.patchValue({
          //   endereco:{
          //     numero: 15
          //   }
          // })
          // PARA PASSAR O OBJETO DA API DO VIA CEP
          this.elTemplate.form.patchValue({endereco : endereco});
        }
      )
  }

}
