import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Page404Component} from './component/page404/page404.component';
import {MainComponent} from './modules/main/component/main/main.component';
import {AllComponent} from './component/all/all.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      {
        path: 'people', loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)
      },
      {
        path: 'planets', loadChildren: () => import('./modules/planets/planets.module').then(m => m.PlanetsModule)
      },
      {
        path: 'starships', loadChildren: () => import('./modules/starships/starships.module').then(m => m.StarshipsModule)
      },
      {
        path: 'all', component: AllComponent
      }
    ]
  },
  {
    path: '**', component: Page404Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
