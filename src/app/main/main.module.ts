import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../shared/module/shared.module'

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class MainModule { }
