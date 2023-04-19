import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderDataService } from '../services/loader-data.service';
import { TagDataService } from '../services/tag-data.service';
import { TaskStoreLocalService } from '../services/task-store-local.service';
import { TaskStoreRemoteService } from '../services/task-store-remote.service';
import { ToastDataService } from '../services/toast-data.service';
import { Task } from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(
    private router: Router,
    private taskStore: TaskStoreLocalService,
    private loaderService: LoaderDataService,
    private toastService: ToastDataService
  ) { }

  showLoader() {
    this.loaderService.showLoader();
  }

  showToast() {
    this.toastService.showToast(new Date().toString());
  }

  navToAddTask = () => {
    this.router.navigateByUrl('/add-task/basic');
  }

  ngOnInit(): void {
    this.tasks$ = this.taskStore.getTasksBySearch$();
  }

  deleteTask(task: Task) {
    this.taskStore.deleteTask(task);
  }

}
