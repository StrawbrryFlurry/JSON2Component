import { IJSONComponentSchema } from './interfaces/schema.interface';

// Example schema
export const schema = ((): string =>
  JSON.stringify({
    type: 'img',
    styles: {
      'background-color': 'black',
      height: '100vh',
    },
    props: {
      src: 'https://miro.medium.com/max/700/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
    },
    children: [
      {
        type: 'test',
      },
      {
        type: 'p',
        content: 'Yoshiii',
      },
      {
        type: 'h1',
        children: [
          {
            type: 'div',
            content: 'beep boop',
            children: [
              {
                type: 'h1',
                props: {
                  innerHTML: 'O:',
                },
              },
            ],
          },
        ],
      },
    ],
  } as IJSONComponentSchema))();
