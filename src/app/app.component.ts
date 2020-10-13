import { Component } from '@angular/core';

import { schema } from './json2-component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Test';
  schema = schema;
}
