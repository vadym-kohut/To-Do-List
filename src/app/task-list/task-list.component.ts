import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  tasks: any[] = [
    {
      title: 'task1',
      description: 'qweasdzxc1',
      tags: ['tag1', 'tag2']
    },
    {
      title: 'task2',
      description: 'qweasdzxc2',
      tags: ['tag3', 'tag4', 'tag5']
    },
    {
      title: 'task3',
      description: 'qweasdzxc3',
      tags: []
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
