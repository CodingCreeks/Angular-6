import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'angular',
    loadChildren: './angular/angular.module#AngularModule'
  },
  {
    path: 'spring',
    loadChildren: './spring/spring.module#SpringModule'
  },
  {
    path: 'bootstrap',
    loadChildren: './bootstrap/bootstrap.module#BootstrapModule'
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
