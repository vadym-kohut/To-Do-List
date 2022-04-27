import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/task-list/task';
import { TaskStoreService } from 'src/app/task-store.service';

@Component({
  selector: 'app-search-task',
  templateUrl: './search-task.component.html',
  styleUrls: ['./search-task.component.scss']
})
export class SearchTaskComponent implements OnInit {

  constructor(private taskStore: TaskStoreService) { }

  ngOnInit(): void {


  }

}
