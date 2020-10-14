import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

import { ElementDirective } from '../../directives';
import { StyleClasses } from '../../interfaces';
import { JSONComponentBase } from '../../lib/JSONComponentBase';

@Component({
  selector: 'base-element',
  templateUrl: './base-element.component.html',
  styleUrls: ['./base-element.component.scss'],
})
export class BaseElementComponent implements OnInit, AfterViewInit {
  @Input('componentBase') componentBase: JSONComponentBase;
  @ViewChild(ElementDirective, { static: true })
  componentElement: ElementDirective;
  @ViewChild('nativeElement') nativeElement: ElementRef<any>;
  public styles: StyleClasses;

  constructor() {}

  ngOnInit(): void {
    if (this.componentBase.isAngularComponent) this.initAngularComponent();
  }

  ngAfterViewInit(): void {
    if (!this.componentBase.isAngularComponent) this.initNativeElement();
  }

  initAngularComponent() {
    const factory = this.componentBase.componentFactory;
    const viewContainerRef = this.componentElement.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(factory);

    componentRef.instance._definition = this.componentBase;
    componentRef.instance._content = this.componentBase.content || undefined;
    componentRef.instance._children = this.componentBase.children || undefined;
    componentRef.instance._styles = this.componentBase.styles || undefined;
    componentRef.instance._props = this.componentBase.props || undefined;

    if (this.componentBase.hasProps)
      Object.entries(this.componentBase.props).forEach(
        ([key, value]) => (componentRef.instance[key] = value)
      );
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
