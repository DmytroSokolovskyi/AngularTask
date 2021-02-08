import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { MainComponent } from './components/main/main.component';
import { CarsComponent } from './components/cars/cars.component';
import { CreateComponent } from './components/create/create.component';
import {ReactiveFormsModule} from '@angular/forms';
import { CarComponent } from './components/car/car.component';

const routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'cars', component: CarsComponent
      },
      {
        path: 'create', component: CreateComponent
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CarsComponent,
    CreateComponent,
    CarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

