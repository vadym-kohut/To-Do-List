import { Component, OnInit } from '@angular/core';
import { Project } from './project';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projects: Project[] = [
    {
      title: 'Work',
      dataBsTarget: 'home',
      subprojects: [
        {
          title: 'Today',
          id: 1
        },
        {
          title: 'This week',
          id: 2
        },
        {
          title: 'This month',
          id: 3
        }
      ],
      id: 1
    },
    {
      title: 'Home',
      dataBsTarget: 'dashboard',
      subprojects: [
        {
          title: 'Today',
          id: 1
        },
        {
          title: 'This week',
          id: 2
        },
        {
          title: 'This month',
          id: 3
        }
      ],
      id: 2
    },
    {
      title: 'Orders',
      dataBsTarget: 'orders',
      subprojects: [
        {
          title: 'Today',
          id: 1
        },
        {
          title: 'This week',
          id: 2
        },
        {
          title: 'This month',
          id: 3
        }
      ],
      id: 3
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
