import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { ControlMessagesComponent } from '../components/control-messages/control-messages.component'
import { FirebaseModule } from './firebase.module';
import { LazyLoadImageModule } from 'ng-lazyload-image';
//Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

export const COMPONENTS = [
  SpinnerComponent,
  ControlMessagesComponent,
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
    LazyLoadImageModule,
    //Angular Material
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatCardModule,

    //component
    COMPONENTS
  ],
  declarations: COMPONENTS
})

export class SharedModule { }