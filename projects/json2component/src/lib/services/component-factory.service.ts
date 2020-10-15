import { ComponentFactory, ComponentFactoryResolver } from '@angular/core';

import { IFactoryConfiguration } from '../interfaces';

export class ComponentFactoryService {
  private factories: IFactoryConfiguration[] = [];

  constructor(
    factories: IFactoryConfiguration[],
    private readonly resolver: ComponentFactoryResolver
  ) {
    factories.forEach((factory) => this.factories.push(factory));
  }

  resolveComponentFactory<T>(name: string): ComponentFactory<T> {
    try {
      const { component } = this.factories.find((_) => _.name === name);

      return this.resolver.resolveComponentFactory(component);
    } catch {
      throw new Error(
        `Component with name ${name} is not part of the current module - add it in the forRoot method of the module`
      );
    }
  }
}
