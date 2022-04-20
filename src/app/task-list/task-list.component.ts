import { Component, OnInit } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: Task[] = [
    {
      title: 'task1',
      description: 'First description',
      tags: ['tag1', 'tag2'],
      priority: 1,
      id: 0
    },
    {
      title: 'task2',
      description: 'Second description',
      tags: ['tag3', 'tag4', 'tag5'],
      priority: 2,
      id: 1
    },
    {
      title: 'task3',
      description: 'Third description',
      tags: ['tag3', 'tag4', 'tag5'],
      id: 2
    },
    {
      title: 'task4',
      description: 'Fourth description',
      tags: [],
      priority: 3,
      id: 3
    }
  ];

  deleteTask(clickedTaskId: number) {
    console.log(clickedTaskId);
    this.tasks.splice(clickedTaskId, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
