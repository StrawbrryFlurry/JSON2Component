import { StyleClasses } from './helpertypes';
import { JSONHTMLElement } from './HTMLElement.type';

export interface IJSONComponentSchema {
  type: JSONHTMLElement;
  styles?: StyleClasses;
  content?: string;
  props?: { [key: string]: string };
  children?: IJSONComponentSchema[];
}
