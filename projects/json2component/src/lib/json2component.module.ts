import { CommonModule } from '@angular/common';
import { ComponentFactoryResolver, ModuleWithProviders, NgModule } from '@angular/core';

import { BaseElementComponent, JSONComponent } from './components';
import { ElementDirective } from './directives';
import { IFactoryConfiguration } from './interfaces';
import { ComponentFactoryService } from './services';
import { _FACTORIES } from './tokens';

@NgModule({
  declarations: [BaseElementComponent, JSONComponent, ElementDirective],
  imports: [CommonModule],
  exports: [JSONComponent, BaseElementComponent],
})
export class JSON2ComponentModule {
  static forRoot(
    factories: IFactoryConfiguration[]
  ): ModuleWithProviders<JSON2ComponentModule> {
    return {
      ngModule: JSON2ComponentModule,
      providers: [
        {
          provide: _FACTORIES,
          useValue: factories,
        },
        {
          provide: ComponentFactoryService,
          useFactory: componentFactoryServiceFactory,
          deps: [_FACTORIES, ComponentFactoryResolver],
        },
      ],
    };
  }
}

export function componentFactoryServiceFactory(
  factories: IFactoryConfiguration[],
  resolver: ComponentFactoryResolver
) {
  return new ComponentFactoryService(factories, resolver);
}
