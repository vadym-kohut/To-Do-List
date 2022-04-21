import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  project!: Project;

  navToEdit(id: number) {
    this.router.navigateByUrl(`edit-project/${id}/basic`);
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
