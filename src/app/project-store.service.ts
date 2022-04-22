import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from './project-list/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectStoreService {

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

  constructor(private router: Router) { }


}
