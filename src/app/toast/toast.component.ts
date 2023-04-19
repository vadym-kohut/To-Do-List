import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {

  toastData$!: Observable<string | null>;

  constructor(private toastService: ToastService) { }

  hideToast() {
    this.toastService.hideToast();
  }

  ngOnInit(): void {
    this.toastData$ = this.toastService.getToastData$();
  }

}
