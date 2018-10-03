import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SpringRoutingModule } from './spring-routing.module';

import { SpringComponent } from './spring.component';

@NgModule({
  imports: [CommonModule, SpringRoutingModule],
  declarations: [SpringComponent]
})
export class SpringModule {}
