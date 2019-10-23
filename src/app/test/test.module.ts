import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api/api.component';
import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from '../shared/module/shared.module'
import { TestSandbox } from './test.sandbox';

@NgModule({
  declarations: [
    ApiComponent,
  ],
  imports: [
    SharedModule,
    CommonModule,
    TestRoutingModule,
  ],
  providers: [
    TestSandbox
  ]
})
export class TestModule { }
