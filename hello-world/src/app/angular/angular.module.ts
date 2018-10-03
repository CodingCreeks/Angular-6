import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularRoutingModule } from './angular-routing.module';
import { DropdownDirective } from '../directives/dropdown.directive';

import { AngularComponent } from './angular.component';
import { AngularSidebarComponent } from './angular-sidebar/angular-sidebar.component';
import { AngularContentComponent } from './angular-content/angular-content.component';
import { GettingStartedComponent } from './angular-content/getting-started/getting-started.component';

@NgModule({
  imports: [CommonModule, AngularRoutingModule],
  declarations: [
    DropdownDirective,
    AngularComponent,
    AngularSidebarComponent,
    AngularContentComponent,
    GettingStartedComponent
  ]
})
export class AngularModule {}
