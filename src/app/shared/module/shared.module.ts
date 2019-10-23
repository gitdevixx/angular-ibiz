import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../components/spinner/spinner.component';

export const COMPONENTS = [
  SpinnerComponent,
]

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    //module
    TranslateModule,
    EffectsModule,
    //component
    COMPONENTS
  ],
  declarations: COMPONENTS
})

export class SharedModule { }