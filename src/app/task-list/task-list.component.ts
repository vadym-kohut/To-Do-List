import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoaderService } from '../loader.service';
import { TaskStoreLocalService } from '../task-store-local.service';
import { TaskStoreRemoteService } from '../task-store-remote.service';
import { ToastService } from '../toast.service';
import { Task } from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$!: Observable<Task[]>;

  constructor(private router: Router, private taskStore: TaskStoreLocalService, private loaderService: LoaderService, private toastService: ToastService) { }

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
