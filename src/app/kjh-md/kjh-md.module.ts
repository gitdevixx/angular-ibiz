import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KjhMainComponent } from './kjh-main/kjh-main.component'
import { KjhMdRoutingModule } from './kjh-md-routing.module';
import { KjhToolbarComponent } from './kjh-toolbar/kjh-toolbar.component';
import { SharedModule } from '../shared/module/shared.module';
import { KjhMdSandbox } from './kjh-md.sandbox';


@NgModule({
  declarations: [KjhMainComponent, KjhToolbarComponent],
  imports: [
    CommonModule, 
    KjhMdRoutingModule,
    SharedModule
  ],
  providers: [
    KjhMdSandbox
  ]
})
export class KjhMdModule { }
