import { Injectable } from '@angular/core';
import { Task } from './task-list/task';
import { BehaviorSubject, combineLatest, filter, map, Observable, tap } from 'rxjs';
import { Priority } from './task-add-form/priority';
import { SearchQueryServiceService } from './search-query-service.service';
import { ProjectStoreService } from './project-store.service';
import { TaskStore } from './task-store';
import { TagStoreService } from './tag-store.service';

@Injectable({
  providedIn: 'root'
})
export class TaskStoreLocalService implements TaskStore {

  private tasks$ = new BehaviorSubject<Task[]>([
    {
      title: 'Fix bug in How-To-Mix project',
      description: 'Add to chosen is adding same ingredients from both ingredient list and ingredient search',
      tags: ['Work', 'This week'],
      priority: Priority.Medium,
      project: 1,
      id: 1
    },
    {
      title: 'Get mug',
      description: 'Bring my own mug to the office',
      tags: ['Work', 'Can wait'],
      priority: Priority.Low,
      project: 2,
      id: 2
    },
    {
      title: 'To-Do-List feature',
      description: 'Add tags to to-do-list and set tag filter',
      tags: ['Work', 'This week', 'Urgent'],
      priority: Priority.High,
      project: 2,
      id: 3
    },
    {
      title: 'New harness',
      description: 'Buy Cookie new harness',
      tags: ['Home', 'This month'],
      priority: Priority.Medium,
      project: 4,
      id: 4
    }
  ]);

  taskIdToEdit!: number;

  constructor(
    private queryService: SearchQueryServiceService,
    private projectStore: ProjectStoreService,
    private tagStore: TagStoreService
  ) { }

  getAllTasks$() {
    return this.tasks$.asObservable();
  }

  getTasksBySearch$() {
    return combineLatest([this.getAllTasks$(), this.queryService.getQuery$(), this.projectStore.getProjectToShow$(), this.tagStore.getChosenTags$()]).pipe(
      map(([tasks, query, id, tags]) => {
        let filteredTasks = tasks;
        if (id) {
          filteredTasks = filteredTasks.filter(task => task.project == id);
        }
        if (query !== '') {
          filteredTasks = filteredTasks.filter(task => task.title.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
        }
        if (tags.length !== 0) {
          filteredTasks = filteredTasks.filter((task: Task) => tags.every((tag: string) => task.tags.includes(tag)));
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

  getTaskToEdit(): Task {
    return this.tasks$.getValue().filter(task => task.id == this.taskIdToEdit)[0];
  }

}
