import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Json2ComponentModule } from './shared/json2component';
import { CustomComponent } from './test-component/custom.component';

@NgModule({
  declarations: [AppComponent, CustomComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Json2ComponentModule.forRoot([
      { component: CustomComponent, name: 'custom-component' },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
