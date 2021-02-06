import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { PeopleComponent } from './components/people/people.component';
import {RouterModule, Routes} from '@angular/router';
import {PeopleService} from './services/people.service';
import { PeopleOneComponent } from './components/people-one/people-one.component';
import { LoadingComponent } from './components/loading/loading.component';
import { CustomPipe } from './custom.pipe';

const routes: Routes = [
  {
    path: '', component: PeopleComponent
  }
];

@NgModule({
  declarations: [PeopleComponent, PeopleOneComponent, LoadingComponent, CustomPipe],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    PeopleComponent
  ],
  providers: [PeopleService]
})
export class PeopleModule {
}
