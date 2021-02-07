import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IPlanets} from '../../../interfase/planets';
import {URL} from '../../../config/URL';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor(private httpClient: HttpClient) {
  }

  getPlanet(id): Observable<IPlanets>{
    return this.httpClient.get<IPlanets>(URL.planets + id);
  }
}
