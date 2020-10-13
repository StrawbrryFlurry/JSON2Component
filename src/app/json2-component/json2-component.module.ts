import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BaseElementComponent, JSONComponent } from './components';
import { ElementDirective } from './directives';

@NgModule({
  declarations: [BaseElementComponent, JSONComponent, ElementDirective],
  imports: [CommonModule],
  exports: [JSONComponent],
})
export class Json2ComponentModule {}
