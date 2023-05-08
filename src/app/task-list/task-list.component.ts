import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderDataService } from '../services/loader-data.service';
import { ToastDataService } from '../services/toast-data.service';
import { Task } from '../shared/task';
import {TaskDataService} from "../services/task-data.service";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  taskList$: Observable<Task[]> = this.taskData.getTasksBySearch$();

  constructor(
    private router: Router,
    private taskData: TaskDataService,
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

  removeTask(task: Task) {
    this.taskData.removeTask(task);
  }

}
