import { Component, Input, OnInit } from '@angular/core';

import { JSONComponentBase } from '../../lib';

@Component({
  selector: 'native-element',
  template: `
    <h1 *ngIf="component" [ngStyle]="component.hasStyles ? style : null">
      <ng-template *ngFor="let child of component.children">
        <base-element [componentBase]="child"></base-element>
      </ng-template>
    </h1>
  `,
})
export class NativeElementComponent implements OnInit {
  @Input('definition') component: JSONComponentBase;

  style;

  constructor() {}

  ngOnInit(): void {
    console.log(this.component);
    this.style = this.component?.styles;
  }
}
