import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task-list/task';

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {

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


  constructor(private router: Router) { }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
    console.log(this.tasks);

  }

  getTasks() {
    return this.tasks;
  }

  addTask(task: Task) {
    this.tasks.push(task);
    task.id = this.tasks.length + 1;
  }
}
