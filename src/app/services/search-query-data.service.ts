import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchQueryDataService {

  private searchQueryValue$ = new BehaviorSubject<string>('');

  constructor() {
  }

  getSearchQuery$(): Observable<string> {
    return this.searchQueryValue$.asObservable();
  }

  setSearchQuery(searchQuery: string) {
    this.searchQueryValue$.next(searchQuery);
  }

}
