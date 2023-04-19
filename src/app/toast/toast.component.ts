import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastDataService } from '../services/toast-data.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  toastData$!: Observable<string | null>;

  constructor(private toastService: ToastDataService) { }

  hideToast() {
    this.toastService.hideToast();
  }

  ngOnInit(): void {
    this.toastData$ = this.toastService.getToastData$();
  }

}
