import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringModule } from './../spring/spring.module';
import { AngularModule } from './../angular/angular.module';
import { BootstrapModule } from './../bootstrap/bootstrap.module';

@NgModule({
  imports: [CommonModule, AngularModule, SpringModule, BootstrapModule],
  exports: [AngularModule, SpringModule, BootstrapModule],
  declarations: []
})
export class SharedModule {}
