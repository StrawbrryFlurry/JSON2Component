import { Type } from '@angular/core';

import { HeadingOneComponent, ParagraphComponent } from '../components';

type AngularComponent = string;
export type NativeElement = 'p' | 'h1' | 'div' | 'img';
export type JSONHTMLElement = NativeElement & AngularComponent;

export const NativeElementMap: { [key in NativeElement]: Type<any> } = {
  p: ParagraphComponent,
  h1: HeadingOneComponent,
  div: HeadingOneComponent,
  img: HeadingOneComponent,
};
