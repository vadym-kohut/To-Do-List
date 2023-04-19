import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderDataService {

  private isLoaderShown$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getIsLoaderShown$():Observable<boolean> {
    return this.isLoaderShown$.asObservable();
  }

  showLoader() {
    this.isLoaderShown$.next(true);
  }

  hideLoader() {
    this.isLoaderShown$.next(false);
  }
}
