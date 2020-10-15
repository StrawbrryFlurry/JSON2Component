import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { JSON2ComponentModule } from 'projects/json2component/src/lib';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomComponent } from './custom.component';

@NgModule({
  declarations: [AppComponent, CustomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JSON2ComponentModule.forRoot([
      { component: CustomComponent, name: 'custom-component' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
