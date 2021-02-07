import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlanetsComponent} from './component/planets/planets.component';

const routes: Routes = [
  {
    path: '', component: PlanetsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule { }
