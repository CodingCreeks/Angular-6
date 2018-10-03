import { BootstrapComponent } from './bootstrap.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapRoutingModule } from './bootstrap-routing.module';

@NgModule({
  imports: [CommonModule, BootstrapRoutingModule],
  declarations: [BootstrapComponent]
})
export class BootstrapModule {}
