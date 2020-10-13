# JSON2Component Angular Module

I got asked if there was an Angular library that does a similar thing to [json2react](https://github.com/txgruppi/json2react) - maybe there is - nonetheless we are here now with my somewhat whacky approch to it :P

If you have any suggestions for potential improvments I'd be grateful to hear them! 🍪

# How does it work?

To use this library import it into the module it's going to be used in. This can either be the AppModule or some sub module.

```TS
@NgModule({
  declarations: [AppComponent, TestComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Json2ComponentModule.forRoot([
      { component: TestComponent, name: 'test' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

If you want to specify Angular components in the JSON schema you need to specify these components in the `forRoot` method of the module. It takes an array of objects represented by the `IFactoryConfiguration` interface. If you are not going to use Angular components provide an empty array.

After that you can start using the `json-component` component in the configured module. To render a view from JSON you need to specify a template that is compliant with the `IJSONComponentSchema` interface. An example schema is provided with the module.

# Schema

The template schema consists of five properties:

## type

> This property is required

The type of element being generated. For now this projects supports:

- p
- h1
- h2
- div
- img

Supported elements are also declared in listed in `interfaces/HTMLElement.type.ts/NativeElement`

```JSON
{
    "type": "div"
}
```

You can also specify the name of an angular component registered in the forRoot method.

## styles

> This property is optional

An object containing key value pairs that represent css classes:

```JSON
"styles" : {
  "background-color": "#121212",
  "font-family": "sans-serif"
}
```

## content

> This property is optional

Content that is being displayed inside an element like `<h1>`_I like cookies_`</h1>`

```JSON
{
    "content": "I like cookies"
}
```

## props

> This property is optional

An object containing key value pairs that represent properties of an HTML element or Angular component.

```JSON
{
    "type": "img",
    "props": {
        "src": "https://web.com/content/super-cute-dog.jpg"
    }
}
```

## children

> This property is optional

An array of Objects complient with the `IJSONComponentSchema` schema.

Specifing this property will insert new elements inside the parent.

```JSON
{
    "type": "div",
    "children": [
        {
            "type": "h1",
            "props": {
                "innerHTML": "My favourite food"
            }
        },
        {
            "type": "p",
            "content": "Is cookies :3"
        }
    ]
}
```

# Example configuration

There is a sample schema provided with the module that can be imported from from the module directory to see how the schema can be used

### app.component.ts

```TS
import { schema } from './shared/json2component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _schema = schema;
}
```

That schema can then be used in a template to dynamically create components from that schema.

### app.component.html

```HTML
<json-component [template]="_schema"></json-component>
```

Using this schema will result in the following preview

![alt text](https://raw.githubusercontent.com/M1CH3L1US/JSON2Component/master/.github/assets/schema_preview.png)

## Schema example code

```TS
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
        type: 'h1',
        content: 'Things I like',
      },
      {
        type: 'div',
        styles: {
          display: 'flex',
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

```
