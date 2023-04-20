import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable} from "rxjs";
import {Task} from "../shared/task";
import {Priority} from "../shared/priority";
import {Tag} from "../shared/tag";
import {SearchQueryDataService} from "./search-query-data.service";
import {ProjectDataService} from "./project-data.service";
import {TagDataService} from "./tag-data.service";

@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  private taskList$ = new BehaviorSubject<Task[]>([
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
    private searchQueryData: SearchQueryDataService,
    private projectData: ProjectDataService,
    private tagData: TagDataService
  ) {
  }

  getTaskList$(): Observable<Task[]> {
    return this.taskList$.asObservable();
  }

  getTasksBySearch$() {
    return combineLatest([this.getTaskList$(), this.searchQueryData.getQuery$(), this.projectData.getSelectedProject$(), this.tagData.getSelectedTagList$()]).pipe(
      map(([tasks, query, selectedProject, tags]) => {
        let filteredTasks = tasks;
        if (selectedProject) {
          filteredTasks = filteredTasks.filter(task => task.project == selectedProject!.id);
        }
        if (query !== '') {
          filteredTasks = filteredTasks.filter(task => task.title.toLocaleLowerCase().startsWith(query.toLocaleLowerCase()));
        }
        if (tags.length !== 0) {
          filteredTasks = filteredTasks.filter((task: Task) => tags.every((tag: Tag) => task.tags.includes(tag.tagName)));
        }
        return filteredTasks;
      })
    );
  }

  addTask(newTask: Task) {
    newTask.id = this.taskList$.getValue().length + 1;
    this.taskList$.next([...this.taskList$.getValue(), newTask]);
  }

  removeTask(taskToRemove: Task) {
    this.taskList$.next(this.taskList$.getValue().filter((task) => task.id !== taskToRemove.id));
  }

  getTaskCount$(): Observable<number> {
    return this.getTaskList$().pipe(
      map((tasks: Task[]) => tasks.length)
    );
  }

  getFilteredTaskCount$(): Observable<number> {
    return this.getTasksBySearch$().pipe(
      map((taskList: Task[]) => taskList.length)
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
    return this.taskList$.getValue().filter(task => task.id === this.taskIdToEdit)[0];
  }
}
