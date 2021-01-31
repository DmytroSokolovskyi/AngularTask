import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './components/post/post.component';
import { PostsComponent } from './components/posts/posts.component';
import { FullpostComponent } from './components/fullpost/fullpost.component';
import {HttpClientModule} from '@angular/common/http';
import {PostService} from './components/services/post.service';


@NgModule({
  declarations: [PostComponent, PostsComponent, FullpostComponent],
  imports: [
    CommonModule,
    PostRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [PostService]
})
export class PostModule { }
