import { ComponentFactory } from '@angular/core';

import { JSONHTMLElement, NativeElement, StyleClasses } from '../interfaces';
import { IJSONComponentSchema } from '../interfaces/schema.interface';
import { ComponentFactoryService } from '../services';

export const NATIVE_ELEMENTS: NativeElement[] = ['h1', 'h2', 'div', 'img', 'p'];

export class JSONComponentBase {
  public type: JSONHTMLElement;
  public styles: StyleClasses;
  public props: { [key: string]: any };
  public data: string;
  public children: JSONComponentBase[];
  public content: string;

  public componentFactory: ComponentFactory<any>;

  constructor(
    schema: IJSONComponentSchema,
    factoryService: ComponentFactoryService
  ) {
    this.type = schema.type;
    this.props = schema.props;
    this.styles = schema.styles;
    this.content = schema.content;

    if (!NATIVE_ELEMENTS.includes(this.type)) {
      this.componentFactory = factoryService.resolveComponentFactory(
        schema.type
      );
    }

    if (schema.children) {
      this.children = schema.children.map(
        (child) => new JSONComponentBase(child, factoryService)
      );
    }
  }

  get isAngularComponent() {
    return !!this.componentFactory;
  }

  get hasStyles() {
    return !!this.styles;
  }

  get hasProps() {
    return !!this.props;
  }

  get hasChildren() {
    return !!this.children && this.children?.length > 0;
  }
}
