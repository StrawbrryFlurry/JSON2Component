import { CommonModule } from '@angular/common';
import { ComponentFactoryResolver, ModuleWithProviders, NgModule } from '@angular/core';

import { BaseElementComponent, JSONComponent } from './components';
import { ElementDirective } from './directives';
import { IFactoryConfiguration } from './interfaces';
import { ComponentFactoryService } from './services';
import { _CONFIG } from './tokens';

@NgModule({
  declarations: [BaseElementComponent, JSONComponent, ElementDirective],
  imports: [CommonModule],
  exports: [JSONComponent],
})
export class Json2ComponentModule {
  static forRoot(
    config: IFactoryConfiguration[]
  ): ModuleWithProviders<Json2ComponentModule> {
    return {
      ngModule: Json2ComponentModule,
      providers: [
        {
          provide: _CONFIG,
          useValue: config,
        },
        {
          provide: ComponentFactoryService,
          useFactory: componentFactoryServiceFactory,
          deps: [_CONFIG, ComponentFactoryResolver],
        },
      ],
    };
  }
}

function componentFactoryServiceFactory(
  factories: IFactoryConfiguration[],
  resolver: ComponentFactoryResolver
) {
  return new ComponentFactoryService(factories, resolver);
}
