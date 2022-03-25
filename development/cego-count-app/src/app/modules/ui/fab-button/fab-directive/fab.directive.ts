import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: 'button[appFab]',
})
export class FabDirective {
  constructor(private elementRef: ElementRef<HTMLButtonElement>) {
    this.elementRef.nativeElement.style.right = '1rem';
    this.elementRef.nativeElement.style.bottom = '1rem';
    this.elementRef.nativeElement.style.position = 'absolute';
  }
}
