import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryDataService {

  private queryValue$ = new BehaviorSubject<string>('');

  constructor() {
  }

  getQuery$(): Observable<string> {
    return this.queryValue$.asObservable();
  }

  setQuery(query: string) {
    this.queryValue$.next(query);
  }

}
