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
    private projectData: ProjectDataService
  ) { }

  clearProjectFilter() {
    this.projectData.clearSelectedProject();
  }

  ngOnInit(): void {
    this.tasksCount$ = this.taskData.getTaskCount$();
    this.allTasksCount$ = this.taskData.getTaskCount$();
    this.taskCountByPriority$ = this.taskData.getTaskCountByPriority$();
    this.selectedProjectName$ = combineLatest([this.projectData.getWorkProjectList$(), this.projectData.getSelectedProject$()]).pipe(
      map(([projects, selectedProject]) => {
        const filterArr = projects.filter((project) => project === selectedProject);
        return filterArr.length ? filterArr[0].title : null;
      })
    );
  }

}
