import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KjhMainComponent } from './kjh-main/kjh-main.component'
import { KjhMdRoutingModule } from './kjh-md-routing.module';
import { KjhToolbarComponent } from './kjh-toolbar/kjh-toolbar.component';

@NgModule({
  declarations: [KjhMainComponent, KjhToolbarComponent],
  imports: [
    CommonModule, 
    KjhMdRoutingModule
  ]
})
export class KjhMdModule { }
