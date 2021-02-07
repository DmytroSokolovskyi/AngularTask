import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data = new BehaviorSubject<number>(1);

  constructor() {
  }

  getDataState(): BehaviorSubject<number> {
    return this.data;
  }

  setNewStatePluss(): void {
    this.data.next(this.data.getValue() + 1);
  }
  setNewState(): void {
    this.data.next(this.data.getValue() - 1);
  }
}
