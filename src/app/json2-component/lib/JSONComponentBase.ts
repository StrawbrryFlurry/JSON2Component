import { ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';

import { JSONHTMLElement, NativeElement, StyleClasses } from '../interfaces';
import { IJSONComponentSchema } from '../interfaces/schema.interface';

export const NATIVE_ELEMENTS: NativeElement[] = ['h1', 'div', 'img', 'p'];

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
    componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.type = schema.type;
    this.props = schema.props;
    this.styles = schema.styles;
    this.content = schema.content;

    if (!NATIVE_ELEMENTS.includes(this.type)) {
      const factories = Array.from(
        componentFactoryResolver['_factories'].keys()
      );

      const factoryClass = factories.find(
        (factory: any) => factory.name === this.type
      ) as Type<any>;

      if (factoryClass === undefined) {
        throw new Error(
          `Component factory with name ${this.type} doesn't exist`
        );
      }

      this.componentFactory = componentFactoryResolver.resolveComponentFactory(
        factoryClass
      );
    }

    if (schema.children) {
      this.children = schema.children.map(
        (child) => new JSONComponentBase(child, componentFactoryResolver)
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
