import { Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectStoreService } from 'src/app/project-store.service';
import { Project } from '../project';

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
    private projectStore: ProjectStoreService,
    public router: Router
  ) { }

  setProjectToShow(id: number) {
    this.projectStore.setProjectToShow(id);
  }

  navToEditProject(id: number) {
    this.router.navigate(['edit-project', id]);
  }

  ngOnInit(): void {
  }

}
