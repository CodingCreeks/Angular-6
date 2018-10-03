import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ClassComponent } from './class/class.component';
import { StyleComponent } from './style/style.component';
import { EventComponent } from './event/event.component';
import { DataBindingComponent } from './data-binding.component';
import { PropertyComponent } from './property/property.component';
import { TwoWayComponent } from './two-way/two-way.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DataBindingComponent
      },
      {
        path: 'property',
        component: PropertyComponent
      },
      {
        path: 'class',
        component: ClassComponent
      },
      {
        path: 'style',
        component: StyleComponent
      },
      {
        path: 'event',
        component: EventComponent
      },
      {
        path: 'two-way',
        component: TwoWayComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataBindingRoutingModule {}
