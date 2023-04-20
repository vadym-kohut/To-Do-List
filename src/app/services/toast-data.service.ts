import {Injectable} from '@angular/core';
import {BehaviorSubject, interval, Observable, Subject, throttleTime, timeInterval} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastDataService {

  private toastData$ = new Subject<string | null>();

  constructor() {
  }

  getToastData$(): Observable<string | null> {
    return this.toastData$.asObservable();
  }

  showToast(toastMessage: string) {
    this.toastData$.next(toastMessage);
  }

  hideToast() {
    this.toastData$.next(null);
  }
}
