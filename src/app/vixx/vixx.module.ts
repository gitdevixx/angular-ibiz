
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/module/shared.module';
import { VixxRoutingModule } from './vixx-routing.module';
import { LeoComponent } from './leo/leo.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    VixxRoutingModule
  ],
  declarations: [
    LeoComponent
  ],
  bootstrap: [ LeoComponent ]
})
export class VixxModule { }