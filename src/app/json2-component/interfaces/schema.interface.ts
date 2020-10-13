import { StyleClasses } from './helpertypes';
import { JSONHTMLElement } from './HTMLElement.type';

export interface IJSONComponentSchema {
  type: JSONHTMLElement;
  styles?: StyleClasses;
  props?: { [key: string]: string };
  children?: IJSONComponentSchema[];
}
