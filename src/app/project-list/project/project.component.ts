import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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

  constructor(private router: Router, private projectStore: ProjectStoreService) { }

  ngOnInit(): void {
  }

}
