import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: any[] = [
    {
      title: 'Work',
      subprojects: ['Today', 'This week', 'This month']
    },
    {
      title: 'Home',
      subprojects: ['Today', 'This week', 'This month']
    },
    {
      title: 'Orders',
      subprojects: ['Today', 'This week', 'This month']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
