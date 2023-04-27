import {Component, OnInit} from '@angular/core';
import {ProjectDataService} from '../services/project-data.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {

  projectList$ = this.projectData.getWorkProjectList$();

  constructor(
    private router: Router,
    private projectData: ProjectDataService
  ) {
  }

  removeProject(id: number) {
    this.projectData.removeProject(id);
  }

  navToAddProj() {
    this.router.navigateByUrl('/add-project');
  }

}
