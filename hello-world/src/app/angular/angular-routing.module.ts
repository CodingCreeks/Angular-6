import { AngularComponent } from './angular.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GettingStartedComponent } from './angular-content/getting-started/getting-started.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AngularComponent,
        children: [
          {
            path: '',
            component: GettingStartedComponent
          },
          {
            path: 'data-binding',
            loadChildren:
              './angular-content/data-binding/data-binding.module#DataBindingModule'
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularRoutingModule {}
