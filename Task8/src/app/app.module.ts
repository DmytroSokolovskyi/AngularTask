import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Page404Component } from './component/page404/page404.component';
import {MainComponent} from './modules/main/component/main/main.component';
import { AllComponent } from './component/all/all.component';
import {PeopleModule} from './modules/people/people.module';
import {PlanetsModule} from './modules/planets/planets.module';
import {StarshipsModule} from './modules/starships/starships.module';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    Page404Component,
    AllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PeopleModule,
    PlanetsModule,
    StarshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
