import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  myForm: FormGroup;

  states = [
    { nome: 'oi1', value: 1},
    { nome: 'oi2', value: 2},
    { nome: 'oi3', value: 3},
    { nome: 'oi4', value: 4},
    { nome: 'oi5', value: 5},

  ]

  constructor(
    private httpClient: HttpClient,
    private fb: FormBuilder)
  {
    this.myForm = this.fb.group({
      informacoes: this.fb.group({
        nome: [null],
        email: [null],
        idade: [null],
        confirmaEmail: [null]
      }),
      endereco: this.fb.group({
        cep: [null],
        logradouro: [null],
        numero: [null],
        complemento: [null],
        bairro: [null],
        localidade: [null],
        uf: [null]

      })
    })

  }

  ngOnInit() {
    // VERIFICAR AS MUDANCAS DE STATUS DO FORMULARIO, SE TA VALIDO OU NAO
    // this.myForm.statusChanges
    // VERIFICAR AS MUDANCAS DE STAUS DO CAMPO, SE TA VALIDO OU NAO
    // this.myForm.get('informacoes.nome').statusChanges
    // VERIFICAR AS MUDANCAS DE VALOR DO CAMPO
    // this.myForm.get('informacoes.nome').valueChanges
    // VERIFICAR AS MUDANCAS DE VALOR DO FORMULARIO
    // this.myForm.valueChanges

    this.myForm.get('informacoes.nome').valueChanges
      .subscribe(
        value => console.log('Valor alterado', value)
      )
  }

  getAddress() {
    this.httpClient.get(`http://viacep.com.br/ws/${this.myForm.get('endereco.cep').value}/json/`)
      .subscribe(
        endereco => {
          this.myForm.patchValue({endereco})
        }
      )
  }

}
