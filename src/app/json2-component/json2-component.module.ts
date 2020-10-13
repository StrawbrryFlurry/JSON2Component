import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseElementComponent, JSONComponent, NativeElementComponent } from './components';
import { HeadingOneComponent } from './components/native-elements/heading-one';
import { ElementDirective } from './directives';

@NgModule({
  declarations: [
    BaseElementComponent,
    JSONComponent,
    HeadingOneComponent,
    ElementDirective,
    NativeElementComponent,
  ],
  imports: [CommonModule],
  exports: [JSONComponent],
})
export class Json2ComponentModule {}
