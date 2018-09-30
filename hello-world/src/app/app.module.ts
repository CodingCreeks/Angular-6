import { TestComponent } from './test/test.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AppRoutingModule } from './app-routing.module';
import { PropertyComponent } from './property/property.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    EventComponent,
    PropertyComponent,
    ClassComponent,
    StyleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
