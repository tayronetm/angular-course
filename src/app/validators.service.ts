import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  constructor() { }

  nameValidation(control: FormControl){
    const value = control.value || '',
    errorMessage = `O nome deve começar com "J", mas começa com ${value[0]}`;

    return value.toLoweCase()[0] === "J" ? null: {'invalidName': errorMessage};
  }
}
