import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from '../shared/components/pageNotFound/pageNotFound.component';
import { LeoComponent } from './leo/leo.component';

const routes: Routes = [
  { path: 'vixx', component: LeoComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class VixxRoutingModule { }
