import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subject, throttleTime, timeInterval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  private toastData$ = new Subject<string | null>();

  constructor() { }

  showToast(message: string) {
    this.toastData$.next(message);
  }

  hideToast() {
    this.toastData$.next(null);
  }

  getToastData$() {
    return this.toastData$.asObservable();
  }
}
