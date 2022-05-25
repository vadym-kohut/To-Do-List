import { Component, OnInit } from '@angular/core';
import { ProjectStoreService } from '../project-store.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects$ = this.projectStore.getProjects$();

  constructor(
    private router: Router,
    private projectStore: ProjectStoreService
  ) { }

  deleteProject(id: number) {
    this.projectStore.deleteProject(id);
  }

  navToAddProj() {
    this.router.navigateByUrl('/add-project');
  }

  ngOnInit(): void { }

}
