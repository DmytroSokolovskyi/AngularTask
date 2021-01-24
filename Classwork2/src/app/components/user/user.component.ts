import {Component, Input, OnInit} from '@angular/core';
import {IUser} from '../models/user.models';
import {PostService} from '../services/post.service';
import {IPost} from "../models/post.models";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  user: IUser;

  post: IPost;

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    // this.postService.getPostForId().subscribe(value => console.log(value));
  }

  getUserPost(id): void {
      this.postService.getPostForId(id).subscribe(value => this.post = value);
    }

  getUser(user): void {
    console.log(this.user.id);
  }

}
