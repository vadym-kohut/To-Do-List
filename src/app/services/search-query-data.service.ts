import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryDataService {

  private queryValue$ = new BehaviorSubject<string>('');

  constructor() { }

  getQuery$() {
    return this.queryValue$.asObservable();
  }

  setQuery(query: string) {
    this.queryValue$.next(query);
  }

}
