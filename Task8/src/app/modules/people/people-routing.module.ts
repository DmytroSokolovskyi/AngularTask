import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PeopleComponent} from './component/people/people.component';

const routes: Routes = [{
  path: '', component: PeopleComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeopleRoutingModule { }
