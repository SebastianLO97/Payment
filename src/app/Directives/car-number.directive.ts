import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appCarNumber]'
})
export class CarNumberDirective {

  constructor() { }

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    const onlyNumbers =  input.value.replace(/[^0-9]*/g, '');
    let trimmed = onlyNumbers.replace(/\s+/g, '');
    if (trimmed.length > 16) {
      trimmed = trimmed.substring(0, 16);
    }

    let numbers = [];
    for (let i = 0; i < trimmed.length; i += 4) {
      numbers.push(trimmed.substr(i, 4));
    }

    input.value = numbers.join(' ');

  }
}
