import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPeople} from '../../../interfase';
import {URL} from '../../../config/URL';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private  httpClient: HttpClient) {
  }

  getpeople(id): Observable<IPeople>{
    return this.httpClient.get<IPeople>(URL.people + id);
  }
}
