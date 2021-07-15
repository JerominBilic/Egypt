import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[styleDirective]'
})
export class ImportantTextDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.background = "#EBD2AD";
   }

}
