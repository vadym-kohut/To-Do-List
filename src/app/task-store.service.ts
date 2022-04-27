import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task-list/task';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {

  private tasks$ = new BehaviorSubject<Task[]>([
    {
      title: 'First task',
      description: 'First description',
      tags: ['tag1', 'tag2'],
      priority: 1,
      id: 1
    },
    {
      title: 'Second task',
      description: 'Second description',
      tags: ['tag3', 'tag4', 'tag5'],
      priority: 2,
      id: 2
    },
    {
      title: 'Third task',
      description: 'Third description',
      tags: ['tag3', 'tag4', 'tag5'],
      id: 3
    },
    {
      title: 'Fourth task',
      description: 'Fourth description',
      tags: [],
      priority: 3,
      id: 4
    }
  ]);


  constructor(private router: Router) { }

  getTasks() {
    return this.tasks$.asObservable();
  }

  addTask(task: Task) {
    task.id = this.tasks$.getValue().length + 1;
    this.tasks$.next([...this.tasks$.getValue(), task]);
  }

  deleteTask(id: number) {
    this.tasks$.next(this.tasks$.getValue().filter((task) => task.id !== id));
  }

}
