import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: string): string {
    // TRANSFORMA EM ARRAY DE STRINGS E JUNTA NOVAMENTE
    return value.split('').reverse().join('');
  }

}
