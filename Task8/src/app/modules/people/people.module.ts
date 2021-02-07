import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';
import { PeopleComponent } from './component/people/people.component';
import {PeopleService} from './services/people.service';
import {HttpClientModule} from '@angular/common/http';
import { FilmComponent } from './component/film/film.component';


@NgModule({
  declarations: [PeopleComponent, FilmComponent],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    HttpClientModule
  ],
  exports: [PeopleComponent],
  providers: [PeopleService]
})
export class PeopleModule { }
