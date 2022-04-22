import { Component, OnInit } from '@angular/core';
import { ProjectStoreService } from '../project-store.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  constructor(private projectStore: ProjectStoreService) { }

  projects = this.projectStore.projects;

  ngOnInit(): void {
  }

}
