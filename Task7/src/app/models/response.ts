import {IPeople} from './people.interface';

export interface IResponse {
  count: number;
  next: string;
  previous: string;
  results: IPeople;
}
