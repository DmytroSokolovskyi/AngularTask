import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ICar} from '../models/car.interface';
import {URL} from '../config/index';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) {
  }
  getcars(): Observable<ICar[]> {
    return this.httpClient.get<ICar[]>(URL.cars);
  }

  createcars(car: ICar): Observable<ICar[]> {
    return this.httpClient.post<ICar[]>(URL.cars, car);
  }
}


