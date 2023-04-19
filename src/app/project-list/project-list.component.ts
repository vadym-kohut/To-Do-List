import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from '../services/project-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects$ = this.projectStore.getWorkProjectList$();

  constructor(
    private router: Router,
    private projectStore: ProjectDataService
  ) { }

  deleteProject(id: number) {
    this.projectStore.removeProject(id);
  }

  navToAddProj() {
    this.router.navigateByUrl('/add-project');
  }

  ngOnInit(): void { }

}
