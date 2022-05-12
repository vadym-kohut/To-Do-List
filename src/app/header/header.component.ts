import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ProjectStoreService } from '../project-store.service';
import { TaskStoreLocalService } from '../task-store-local.service';
import { TaskStoreRemoteService } from '../task-store-remote.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tasksCount$!: Observable<number>;
  allTasksCount$!: Observable<number>;
  taskCountByPriority$!: Observable<{ High: number, Medium: number, Low: number }>;
  selectedProjectName$!: Observable<null | string>;

  constructor(private taskStore: TaskStoreRemoteService, private projectStore: ProjectStoreService) { }

  clearProjectFilter() {
    this.projectStore.clearProjectFilter();
  }

  ngOnInit(): void {
    this.tasksCount$ = this.taskStore.getTaskCount$();
    this.allTasksCount$ = this.taskStore.getAllTaskCount$();
    this.taskCountByPriority$ = this.taskStore.getTaskCountByPriority$();
    this.selectedProjectName$ = combineLatest([this.projectStore.getProjects$(), this.projectStore.getProjectToShow$()]).pipe(
      map(([projects, id]) => {
        const filterArr = projects.filter((project) => project.id === id);
        return filterArr.length ? filterArr[0].title : null;
      })
    );
  }

}
