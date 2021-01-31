import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {IUser} from '../../models';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  getUsers(): Observable<IUser[]> {
    return this.httpClient
      .get<IUser[]>('https://jsonplaceholder.typicode.com/users/');
  }

}
