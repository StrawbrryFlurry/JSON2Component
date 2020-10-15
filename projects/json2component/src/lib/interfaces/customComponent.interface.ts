import { JSONComponentBase } from '../core';
import { ComponentProps, StyleClasses } from './helpertypes';

export interface ICustomComponent {
  readonly _styles: StyleClasses;
  readonly _props: ComponentProps;
  readonly _definition: JSONComponentBase;
  readonly _children: JSONComponentBase[];
  readonly _content: string;
}
