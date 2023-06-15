import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appOnlyNumbers]'
})
export class OnlyNumbersDirective {

  constructor() { }
  
  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    input.value =  input.value.replace(/[^0-9]*/g, '');
  }
}
