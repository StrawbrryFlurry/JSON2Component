import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[elementHost]',
})
export class ElementDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
