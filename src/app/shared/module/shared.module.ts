import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../components/spinner/spinner.component';
//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'

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
    
    //Angular Material
    BrowserAnimationsModule, 
    MatInputModule, 
    MatButtonModule,
    MatToolbarModule,
    
    //component
    COMPONENTS
  ],
  declarations: COMPONENTS
})

export class SharedModule { }