import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IKyrs} from '../interface/kyrs.interface';
import {URL} from '../config';

@Injectable({
  providedIn: 'root'
})
export class KyrsService {

  constructor(private  httpClient: HttpClient) {
  }
  getKyrsbyDay(day:string): Observable<IKyrs>{
    return this.httpClient.get<IKyrs>(URL.kyrs + day + '&json');
  }
}
