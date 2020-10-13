import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';

import { ElementDirective } from '../../directives';
import { StyleClasses } from '../../interfaces';
import { JSONComponentBase } from '../../lib/JSONComponentBase';

@Component({
  selector: 'base-element',
  templateUrl: './base-element.component.html',
  styleUrls: ['./base-element.component.scss'],
})
export class BaseElementComponent implements AfterViewInit {
  @Input('componentBase') componentBase: JSONComponentBase;
  @ViewChild(ElementDirective)
  componentElement: ElementDirective;
  @ViewChild('nativeElement') nativeElement: ElementRef<any>;
  public styles: StyleClasses;

  constructor() {}

  ngAfterViewInit(): void {
    if (this.componentBase.isAngularComponent)
      return this.initAngularComponent();

    this.initNativeElement();
  }

  initAngularComponent() {
    const factory = this.componentBase.componentFactory;
    const componentRef = this.componentElement.viewContainerRef.createComponent(
      factory
    );
    componentRef.instance.definition = this.componentBase;
    componentRef.instance.style = this.componentBase.styles;

    if (this.componentBase.hasProps) {
      Object.entries(this.componentBase.props).forEach(
        ([key, value]) => (componentRef.instance[key] = value)
      );
    }

    if (this.componentBase.hasStyles) {
      componentRef.instance.styles = this.componentBase.styles;
    }
  }

  initNativeElement() {
    const nativeElement = this.nativeElement.nativeElement;

    if (this.componentBase.hasProps) {
      Object.entries(this.componentBase.props).forEach(
        ([key, value]) => (nativeElement[key] = value)
      );
    }
  }
}
