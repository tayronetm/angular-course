import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {


  myForm: FormGroup;

  constructor(private fb: FormBuilder)
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
  }

}
