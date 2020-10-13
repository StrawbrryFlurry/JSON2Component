import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Json2ComponentModule } from './json2-component';
import { TestComponentComponent } from './test-component/test-component.component';

@NgModule({
  declarations: [AppComponent, TestComponentComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Json2ComponentModule.forRoot([
      { component: TestComponentComponent, name: 'test' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
