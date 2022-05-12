import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, map, Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProjectStoreService } from './project-store.service';
import { SearchQueryServiceService } from './search-query-service.service';
import { Priority } from './task-add-form/priority';
import { Task } from './task-list/task';
import { TaskStore } from './task-store';

@Injectable({
  providedIn: 'root'
})
export class TaskStoreRemoteService implements TaskStore {

  constructor(private http: HttpClient, private queryService: SearchQueryServiceService, private projectStore: ProjectStoreService) { }

  getAllTasks$(): Observable<Task[]> {
    return this.http.get<Task[]>(`https://crudcrud.com/api/${environment.crudEndpoint}/tasks`);
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
    this.http.post(`https://crudcrud.com/api/${environment.crudEndpoint}/tasks`, task).subscribe();
  }

  deleteTask(task: Task) {
    this.http.delete(`https://crudcrud.com/api/${environment.crudEndpoint}/tasks/${task._id}`).subscribe();
  }

  getTaskCount$(): Observable<number> {
    return this.getTasksBySearch$().pipe(
      map((tasks: Task[]) => tasks.length)
    );
  }

  getAllTaskCount$() {
    return this.getAllTasks$().pipe(
      map((tasks: any) => tasks.length)
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
