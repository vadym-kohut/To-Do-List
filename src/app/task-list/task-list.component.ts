import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskStoreService } from '../task-store.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks = this.taskStore.getTasks();

  constructor(private router: Router, private taskStore: TaskStoreService) { }

  deleteTask(id: number) {
    this.taskStore.deleteTask(id);
    this.tasks = this.taskStore.getTasks();
  }

  navToAdd = () => {
    this.router.navigateByUrl('/add/basic');
  }

  ngOnInit(): void {
  }

}
