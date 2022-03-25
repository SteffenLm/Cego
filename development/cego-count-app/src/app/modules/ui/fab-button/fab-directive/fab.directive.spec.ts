import { ElementRef } from '@angular/core';
import { FabDirective } from './fab.directive';

describe('FabDirective', () => {
  let elementRef: ElementRef<HTMLButtonElement>;
  let directive: FabDirective;
  beforeEach(() => {
    elementRef = new ElementRef(document.createElement('button'));
    directive = new FabDirective(elementRef);
  });
  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('should set right to 1rem', () => {
    expect(elementRef.nativeElement.style.right).toEqual('1rem');
  });

  it('should set bottom to 1rem', () => {
    expect(elementRef.nativeElement.style.bottom).toEqual('1rem');
  });

  it('should set the position absolute to 1rem', () => {
    expect(elementRef.nativeElement.style.position).toEqual('absolute');
  });
});
