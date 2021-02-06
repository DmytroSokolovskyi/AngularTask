import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {URL} from '../../../config';
import {IResponse} from '../../../models';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  constructor(private  httpClient: HttpClient) {
  }

  getPeople(): Observable<IResponse> {
    return this.httpClient.get<IResponse>(URL.people);
  }
}
