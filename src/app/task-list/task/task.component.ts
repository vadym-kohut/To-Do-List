import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../task';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input()
  task!: Task;

  @Output()
  buttonEvent = new EventEmitter<number>();

  addButtonEvent(value: number) {
    this.buttonEvent.emit(value);
  }

  navToEditTask = (id: number) => {
    console.log('edit-task', id);
    this.router.navigate(['edit-task', id]);
  }

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
