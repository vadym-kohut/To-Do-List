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
      dataBsTarget: 'home',
      subprojects: ['Today', 'This week', 'This month']
    },
    {
      title: 'Home',
      dataBsTarget: 'dashboard',
      subprojects: ['Today', 'This week', 'This month']
    },
    {
      title: 'Orders',
      dataBsTarget: 'orders',
      subprojects: ['Today', 'This week', 'This month']
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
