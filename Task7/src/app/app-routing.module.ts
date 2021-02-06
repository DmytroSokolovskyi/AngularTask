import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from './components/main/main.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      // {
      //   path: '', redirectTo: 'people', pathMatch: 'full'
      // },
      {
        path: 'people', loadChildren: () => import('./modules/people/people.module').then(m => m.PeopleModule)
      }
      // {
      //   path: 'planets', component: PlanetsComponent
      // },
      // {
      //   path: 'starships', component: StarshipsComponent
      // },
    ]
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
