import { Component } from '@angular/core';
import { schema } from 'projects/json2component';

@Component({
  selector: 'ng-j2c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'JSON2Component';
  _schema = schema;
}
