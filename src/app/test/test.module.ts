import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './api/api.component';
import { TestRoutingModule } from './test-routing.module';
import { SharedModule } from '../shared/module/shared.module'
import { TestSandbox } from './test.sandbox';
import { IdolPickComponent } from './idol-pick/idol-pick.component';
import { IdolCardComponent } from './idol-card/idol-card.component';

@NgModule({
  declarations: [
    ApiComponent,
    IdolPickComponent,
    IdolCardComponent,
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
