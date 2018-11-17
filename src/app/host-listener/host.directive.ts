import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor() { }

  @HostListener('click') meuClick() {
    alert('Evento disparado pelo HostListener')
  }

}
