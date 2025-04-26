import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUppercaseLetter]',
})
export class UppercaseLetterDirective {
  constructor(private element: ElementRef<HTMLInputElement>) {}

  @HostListener('input')
  onInput() {
    const input = this.element.nativeElement as HTMLInputElement;
    input.value = input.value.toUpperCase();
  }
}
