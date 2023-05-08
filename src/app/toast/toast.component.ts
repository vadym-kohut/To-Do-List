import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastDataService } from '../services/toast-data.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent {

  toastData$: Observable<string | null> = this.toastData.getToastData$();

  constructor(private toastData: ToastDataService) { }

  hideToast() {
    this.toastData.hideToast();
  }

}
