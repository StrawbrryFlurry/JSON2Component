import { Component } from '@angular/core';

import { schema } from './shared/json2component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  _schema = schema;
}
