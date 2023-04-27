import {Component, OnInit} from '@angular/core';
import {combineLatest, map, Observable} from 'rxjs';
import {ProjectDataService} from '../services/project-data.service';
import {TaskDataService} from "../services/task-data.service";
import {TaskCountByPriority} from "../shared/task-count-by-priority";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  taskCount$!: Observable<number>;
  allTaskCount$!: Observable<number>;
  taskCountByPriority$!: Observable<TaskCountByPriority>;
  selectedProjectName$!: Observable<null | string>;

  constructor(
    private taskData: TaskDataService,
    private projectData: ProjectDataService
  ) {
  }

  clearProjectFilter() {
    this.projectData.clearSelectedProject();
  }

  ngOnInit(): void {
    this.taskCount$ = this.taskData.getTaskCount$();
    this.allTaskCount$ = this.taskData.getTaskCount$();
    this.taskCountByPriority$ = this.taskData.getTaskCountByPriority$();
    this.selectedProjectName$ = combineLatest([this.projectData.getWorkProjectList$(), this.projectData.getSelectedProject$()]).pipe(
      map(([projectList, selectedProject]) => {
        const filteredProjectList = projectList.filter((project) => project === selectedProject);
        return filteredProjectList.length ? filteredProjectList[0].title : null;
      })
    );
  }

}
