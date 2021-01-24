import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPost} from '../models/post.models';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private httpClient: HttpClient) {
  }

  getPostForId(id): Observable<IPost> {
    return this
      .httpClient
      .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}
