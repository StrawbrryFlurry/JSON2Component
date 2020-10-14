import { IJSONComponentSchema } from './interfaces';

// Example schema
export const schema = ((): string =>
  JSON.stringify({
    type: 'div',
    styles: {
      width: '100vw',
      display: 'flex',
      'align-items': 'center',
      'flex-direction': 'column',
    },
    children: [
      {
        type: 'custom-component',
        props: {
          title: 'Things I like',
          customProps: {
            someProp: ':3',
          },
        },
        styles: {
          _h1: {
            display: 'flex',
            'justify-content': 'center',
          },
          _div: {
            display: 'flex',
          },
        },
        children: [
          {
            type: 'p',
            content: 'Dogs',
            styles: {
              display: 'flex',
              'align-items': 'center',
              'flex-direction': 'column',
              padding: '20px',
            },
            children: [
              {
                type: 'img',
                props: {
                  src:
                    'https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg',
                },
                styles: {
                  'max-width': '200px',
                },
              },
            ],
          },
          {
            type: 'p',
            content: 'Cookies',
            styles: {
              display: 'flex',
              'align-items': 'center',
              'flex-direction': 'column',
              padding: '20px',
            },
            children: [
              {
                type: 'img',
                props: {
                  src:
                    'https://images.pexels.com/photos/890577/pexels-photo-890577.jpeg',
                },
                styles: {
                  'max-height': '300px',
                },
              },
            ],
          },
        ],
      },
      {
        type: 'h2',
        content: 'Being able to center this div vertically',
        children: [
          {
            type: 'div',
            styles: {
              height: '200px',
              display: 'flex',
              'flex-direction': 'column',
              'justify-content': 'center',
              'align-items': 'center',
              'background-color': '#EFEFEF',
            },
            children: [
              {
                type: 'div',
                styles: {
                  width: '100px',
                  height: '100px',
                  'background-color': '#121212',
                },
              },
            ],
          },
        ],
      },
    ],
  } as IJSONComponentSchema))();
