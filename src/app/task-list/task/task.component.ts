import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { TaskStoreService } from 'src/app/task-store.service';
import { Priority } from 'src/app/task-add-form/priority';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  task!: Task;

  @Output()
  deleteTask = new EventEmitter<number>();

  priorities = Priority;

  removeTask(value: number) {
    this.deleteTask.emit(value);
  }

  navToEditTask = (id: number) => {
    console.log('edit-task', id);
    this.router.navigate(['edit-task', id]);
  }

  constructor(public router: Router, private taskListStore: TaskStoreService) { }

  ngOnInit(): void {
  }
}
