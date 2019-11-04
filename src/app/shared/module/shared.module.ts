import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { FirebaseModule } from './firebase.module';
//Angular Material
import { MatInputModule } from '@angular/material'; 
import { MatButtonModule } from '@angular/material/button'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    FirebaseModule,
    //Angular Material
    BrowserAnimationsModule, 
    MatInputModule, 
    MatButtonModule,
    
    //component
    COMPONENTS
  ],
  declarations: COMPONENTS
})

export class SharedModule { }