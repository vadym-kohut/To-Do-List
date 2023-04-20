import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Project } from '../../shared/project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  project!: Project;

  @Output()
  deleteProject = new EventEmitter<number>();

  removeProject(value: number) {
    this.deleteProject.emit(value);
  }

  showProjectBtns: boolean = false;

  constructor(
    private projectStore: ProjectDataService,
    public router: Router
  ) { }

  setSelectedProject(project: Project) {
    this.projectStore.setSelectedProject(project);
  }

  navToEditProject(id: number) {
    this.router.navigate(['edit-project', id]);
  }

  ngOnInit(): void {
  }

}
