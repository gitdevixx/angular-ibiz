import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KjhMainComponent } from './kjh-main/kjh-main.component';
import { PageNotFoundComponent } from '../shared/components/pageNotFound/pageNotFound.component';


const routes: Routes = [
  {path: 'kjh-main',component: KjhMainComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KjhMdRoutingModule { }

