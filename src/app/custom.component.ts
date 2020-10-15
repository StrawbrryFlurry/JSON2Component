import { Component, OnInit } from '@angular/core';
import { ComponentProps, ICustomComponent, JSONComponentBase, StyleClasses } from 'projects/json2component/src/lib';

@Component({
  selector: 'custom-component',
  template: ` <h1 [ngStyle]="headerStyle">{{ title }}</h1>
    <div [ngStyle]="divStyle">
      <span *ngFor="let child of _children">
        <base-element [componentBase]="child"></base-element>
      </span>
    </div>`,
})
export class CustomComponent implements OnInit, ICustomComponent {
  // Default properties that are being set form the template
  public readonly _styles: StyleClasses;
  public readonly _props: ComponentProps;
  public readonly _children: JSONComponentBase[];
  public readonly _content: string;

  // The template definition of the current element
  public readonly _definition: JSONComponentBase;

  // Properties being set as props
  public title: string;
  public customProps: { someProp: string };

  public divStyle: StyleClasses;
  public headerStyle: StyleClasses;

  constructor() {}

  ngOnInit(): void {
    this.divStyle = this._styles._div;
    this.headerStyle = this._styles._h1;
  }
}
