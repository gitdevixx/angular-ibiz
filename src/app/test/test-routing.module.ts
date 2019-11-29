import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApiComponent } from './api/api.component';
import { PageNotFoundComponent } from '../shared/components/pageNotFound/pageNotFound.component';
import { IdolPickComponent } from './idol-pick/idol-pick.component';

const routes: Routes = [
  {
    path: 'test',
    component: ApiComponent
  },
  {
    path: 'idol',
    component: IdolPickComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestRoutingModule { }
