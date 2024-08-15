import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HelloWorldAngularModule } from '../components/hello-world/hello-world.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HelloWorldAngularModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
