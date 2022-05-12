import { Injectable } from '@angular/core';
import { Task } from './task-list/task';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';
import { Priority } from './task-add-form/priority';
import { SearchQueryServiceService } from './search-query-service.service';
import { ProjectStoreService } from './project-store.service';
import { TaskStore } from './task-store';

@Injectable({
  providedIn: 'root'
})
export class TaskStoreLocalService implements TaskStore {

  private tasks$ = new BehaviorSubject<Task[]>([
    {
      title: 'First task',
      description: 'First description',
      tags: ['tag1', 'tag2'],
      priority: Priority.High,
      project: 1,
      id: 1
    },
    {
      title: 'Second task',
      description: 'Second description',
      tags: ['tag3', 'tag4', 'tag5'],
      priority: Priority.Medium,
      project: 2,
      id: 2
    },
    {
      title: 'Third task',
      description: 'Third description',
      tags: ['tag3', 'tag4', 'tag5'],
      priority: Priority.Medium,
      project: 2,
      id: 3
    },
    {
      title: 'Fourth task',
      description: 'Fourth description',
      tags: [],
      priority: Priority.Low,
      project: 4,
      id: 4
    }
  ]);

  constructor(private queryService: SearchQueryServiceService, private projectStore: ProjectStoreService) { }

  getAllTasks$() {
    return this.tasks$.asObservable();
  }

  getTasksBySearch$() {
    return combineLatest([this.getAllTasks$(), this.queryService.getQuery$(), this.projectStore.getProjectToShow$()]).pipe(
      map(([tasks, query, id]) => {
        let filteredTasks = tasks;
        if (id) {
          filteredTasks = filteredTasks.filter(task => task.project == id);
        }
        if (query !== '') {
          filteredTasks = filteredTasks.filter(task => task.title.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
        }
        return filteredTasks;
      })
    );
  }

  addTask(task: Task) {
    task.id = this.tasks$.getValue().length + 1;
    this.tasks$.next([...this.tasks$.getValue(), task]);
  }

  deleteTask(taskToDelete: Task) {
    this.tasks$.next(this.tasks$.getValue().filter((task) => task.id !== taskToDelete.id));
  }

  getTaskCount$(): Observable<number> {
    return this.getTasksBySearch$().pipe(
      map((tasks: Task[]) => tasks.length)
    );
  }

  getAllTaskCount$(): Observable<number> {
    return this.getAllTasks$().pipe(
      map((tasks: Task[]) => tasks.length)
    );
  }

  getTaskCountByPriority$(): Observable<{ High: number, Medium: number, Low: number }> {
    return this.getTasksBySearch$().pipe(
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
