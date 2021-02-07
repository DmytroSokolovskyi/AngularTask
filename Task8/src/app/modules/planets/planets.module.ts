import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanetsRoutingModule } from './planets-routing.module';
import { PlanetsComponent } from './component/planets/planets.component';
import {HttpClientModule} from '@angular/common/http';
import {PlanetsService} from './services/planets.service';


@NgModule({
  declarations: [PlanetsComponent],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    HttpClientModule
  ],
  exports: [PlanetsComponent],
  providers: [PlanetsService]
})
export class PlanetsModule { }
