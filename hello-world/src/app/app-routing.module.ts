import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EventComponent } from './event/event.component';
import { StyleComponent } from './style/style.component';
import { ClassComponent } from './class/class.component';
import { PropertyComponent } from './property/property.component';

export const routes: Routes = [
  {
    path: 'property', component: PropertyComponent
  },
  {
    path: 'class', component: ClassComponent
  },
  {
    path: 'style', component: StyleComponent
  },
  {
    path: 'event', component: EventComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
