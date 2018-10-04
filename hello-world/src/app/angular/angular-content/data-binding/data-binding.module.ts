import { NgModule } from '@angular/core';
import { DataBindingRoutingModule } from './data-binding-routing.module';

import { EventComponent } from './event/event.component';
import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { DataBindingComponent } from './data-binding.component';
import { PropertyComponent } from './property/property.component';
import { CommonModule } from '@angular/common';
import { TwoWayComponent } from './two-way/two-way.component';

@NgModule({
  imports: [CommonModule, DataBindingRoutingModule],
  declarations: [
    StyleComponent,
    EventComponent,
    ClassComponent,
    PropertyComponent,
    DataBindingComponent,
    TwoWayComponent
  ]
})
export class DataBindingModule {}
