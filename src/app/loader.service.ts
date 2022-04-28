import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loaderShown$ = new BehaviorSubject<boolean>(false);

  constructor() { }

  getLoaderShown() {
    return this.loaderShown$.pipe(tap(console.log));
  }

  showLoader() {
    this.loaderShown$.next(true);
  }

  hideLoader() {
    this.loaderShown$.next(false);
  }
}
