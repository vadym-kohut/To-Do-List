import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from './task-list/task';
import { BehaviorSubject, combineLatest, filter, map, Observable, tap } from 'rxjs';
import { Priority } from './task-add-form/priority';
import { SearchQueryServiceService } from './search-query-service.service';

@Injectable({
  providedIn: 'root'
})
export class TaskStoreService {

  private tasks$ = new BehaviorSubject<Task[]>([
    {
      title: 'First task',
      description: 'First description',
      tags: ['tag1', 'tag2'],
      priority: Priority.High,
      id: 1
    },
    {
      title: 'Second task',
      description: 'Second description',
      tags: ['tag3', 'tag4', 'tag5'],
      priority: Priority.Medium,
      id: 2
    },
    {
      title: 'Third task',
      description: 'Third description',
      tags: ['tag3', 'tag4', 'tag5'],
      priority: Priority.Medium,
      id: 3
    },
    {
      title: 'Fourth task',
      description: 'Fourth description',
      tags: [],
      priority: Priority.Low,
      id: 4
    }
  ]);


  constructor(private router: Router, private queryService: SearchQueryServiceService) { }

  getAllTasks() {
    return this.tasks$.asObservable();
  }

  getTasks() {
    return combineLatest([this.tasks$.asObservable(), this.queryService.getQuery$()]).pipe(
      map(([tasks, query]) => {
        return query === '' ? tasks : tasks.filter(task => task.title.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()))

      })
    );
  }

  addTask(task: Task) {
    task.id = this.tasks$.getValue().length + 1;
    this.tasks$.next([...this.tasks$.getValue(), task]);
  }

  deleteTask(id: number) {
    this.tasks$.next(this.tasks$.getValue().filter((task) => task.id !== id));
  }

  getTaskCount$(): Observable<number> {
    return this.getTasks().pipe(
      map((tasks: Task[]) => tasks.length)
    );
  }

  getAllTaskCount$(): Observable<number> {
    return this.getAllTasks().pipe(
      map((tasks: Task[]) => tasks.length)
    );
  }

  getTaskCountByPriority$(): Observable<{ High: number, Medium: number, Low: number }> {
    return this.getTasks().pipe(
      map((tasks: Task[]) => {
        return {
          High: tasks.filter((task) => task.priority === Priority.High).length,
          Medium: tasks.filter((task) => task.priority === Priority.Medium).length,
          Low: tasks.filter((task) => task.priority === Priority.Low).length
        }
      })
    );
  }

}