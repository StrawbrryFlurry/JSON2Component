import { IJSONComponentSchema } from './interfaces/schema.interface';

// Example
export const schema = ((): string =>
  JSON.stringify({
    type: 'h1',
    styles: {
      'background-color': 'black',
    },
    children: [
      {
        type: 'p',
      },
      {
        type: 'h1',
      },
    ],
  } as IJSONComponentSchema))();
