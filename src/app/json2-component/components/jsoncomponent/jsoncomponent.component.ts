import { Component, ComponentFactoryResolver, Input, OnChanges } from '@angular/core';

import { IJSONComponentSchema } from '../../interfaces';
import { JSONComponentBase } from '../../lib/JSONComponentBase';

@Component({
  selector: 'json-component',
  templateUrl: './jsoncomponent.component.html',
  styleUrls: ['./jsoncomponent.component.scss'],
})
export class JSONComponent implements OnChanges {
  @Input('template') jsonTemplate: string;

  public component: JSONComponentBase;

  constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {}

  ngOnChanges() {
    this.deserializeTemplate();
  }

  deserializeTemplate(): void {
    const template = JSON.parse(this.jsonTemplate) as IJSONComponentSchema;
    const base = new JSONComponentBase(template, this.componentFactoryResolver);

    this.component = base;
  }
}
