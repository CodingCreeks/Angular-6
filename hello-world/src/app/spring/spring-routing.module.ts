import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpringComponent } from './spring.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: SpringComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpringRoutingModule {}
