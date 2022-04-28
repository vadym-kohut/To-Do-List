import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoaderService } from '../loader.service';
import { TaskStoreService } from '../task-store.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks$ = this.taskStore.getTasks();

  constructor(private router: Router, private taskStore: TaskStoreService, private loaderService: LoaderService) { }

  showLoader() {
    this.loaderService.showLoader();
  }

  deleteTask(id: number) {
    this.taskStore.deleteTask(id);
  }

  navToAddTask = () => {
    this.router.navigateByUrl('/add-task/basic');
  }

  ngOnInit(): void {

  }

}
