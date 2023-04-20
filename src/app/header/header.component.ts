import { Component, OnInit } from '@angular/core';
import { combineLatest, map, Observable } from 'rxjs';
import { ProjectDataService } from '../services/project-data.service';
import {TaskDataService} from "../services/task-data.service";

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

  constructor(
    private taskData: TaskDataService,
    private projectStore: ProjectDataService
  ) { }

  clearProjectFilter() {
    this.projectStore.clearSelectedProject();
  }

  ngOnInit(): void {
    this.tasksCount$ = this.taskData.getTaskCount$();
    this.allTasksCount$ = this.taskData.getTaskCount$();
    this.taskCountByPriority$ = this.taskData.getTaskCountByPriority$();
    this.selectedProjectName$ = combineLatest([this.projectStore.getWorkProjectList$(), this.projectStore.getSelectedProject$()]).pipe(
      map(([projects, selectedProject]) => {
        const filterArr = projects.filter((project) => project === selectedProject);
        return filterArr.length ? filterArr[0].title : null;
      })
    );
  }

}
