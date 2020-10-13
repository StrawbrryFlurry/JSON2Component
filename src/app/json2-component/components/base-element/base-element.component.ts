import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { ElementDirective } from '../../directives';
import { StyleClasses } from '../../interfaces';
import { JSONComponentBase } from '../../lib/JSONComponentBase';

@Component({
  selector: 'base-element',
  templateUrl: './base-element.component.html',
  styleUrls: ['./base-element.component.scss'],
})
export class BaseElementComponent implements OnInit {
  @Input('componentBase') componentBase: JSONComponentBase;
  @ViewChild(ElementDirective, { static: true }) element: ElementDirective;

  public styles: StyleClasses;

  constructor() {}

  ngOnInit(): void {
    const factory = this.componentBase.componentFactory;
    const componentRef = this.element.viewContainerRef.createComponent(factory);
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
}
