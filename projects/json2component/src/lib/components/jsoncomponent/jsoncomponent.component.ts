import { Component, Input, OnChanges } from '@angular/core';

import { JSONComponentBase } from '../../core';
import { IJSONComponentSchema } from '../../interfaces';
import { ComponentFactoryService } from '../../services';

@Component({
  selector: 'json-component',
  templateUrl: './jsoncomponent.component.html',
  styleUrls: ['./jsoncomponent.component.scss'],
})
export class JSONComponent implements OnChanges {
  @Input('template') jsonTemplate: string;

  public component: JSONComponentBase;

  constructor(private readonly factoryService: ComponentFactoryService) {}

  ngOnChanges() {
    this.deserializeTemplate();
  }

  deserializeTemplate(): void {
    const template = JSON.parse(this.jsonTemplate) as IJSONComponentSchema;
    const base = new JSONComponentBase(template, this.factoryService);

    this.component = base;
  }
}
