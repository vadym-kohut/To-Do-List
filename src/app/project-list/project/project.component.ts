import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Project } from '../../shared/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {

  @Input()
  project!: Project;

  @Output()
  ProjectRemoved = new EventEmitter<number>();

  removeProject(value: number) {
    this.ProjectRemoved.emit(value);
  }

  isProjectButtonsShown: boolean = false;

  constructor(
    private projectData: ProjectDataService,
    public router: Router
  ) { }

  setSelectedProject(project: Project) {
    this.projectData.setSelectedProject(project);
  }

  navToEditProject(id: number) {
    this.router.navigate(['edit-project', id]);
  }

}
