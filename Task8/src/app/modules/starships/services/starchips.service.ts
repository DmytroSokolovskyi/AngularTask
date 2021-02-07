import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IStarshipsModel} from '../../../interfase/starships.model';
import {URL} from '../../../config/URL';

@Injectable({
  providedIn: 'root'
})
export class StarchipsService {

  constructor(private httpClient: HttpClient) {
  }
  getStarChips(id): Observable<IStarshipsModel> {
    return this.httpClient.get<IStarshipsModel>(URL.starships + id);
  }
}
