import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../shared/task';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Priority } from 'src/app/shared/priority';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  @Input()
  task!: Task;

  @Output()
  deleteTask = new EventEmitter<Task>();

  priorities = Priority;

  removeTask(task: Task) {
    this.deleteTask.emit(task);
  }

  constructor(public router: Router) { }

  navToEditTask = (id: number) => {
    this.router.navigate(['edit-task-form', id]);
  }

  ngOnInit(): void {
  }
}
