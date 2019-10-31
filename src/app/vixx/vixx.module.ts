import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/module/shared.module';
import { VixxRoutingModule } from './vixx-routing.module';
import { LeoComponent } from './leo/leo.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    VixxRoutingModule
  ],
  declarations: [
    LeoComponent
  ],
  bootstrap: [ LeoComponent ]
})
export class VixxModule { }