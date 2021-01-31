import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostComponent} from './components/post/post.component';
import {FullpostComponent} from './components/fullpost/fullpost.component';
import {PostsComponent} from './components/posts/posts.component';

const routes: Routes = [
  {
    path: '', component: PostsComponent, children: [{
      path: ':id', component: FullpostComponent
    }]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
