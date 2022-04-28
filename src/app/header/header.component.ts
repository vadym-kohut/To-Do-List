import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskStoreService } from '../task-store.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tasksCount$!: Observable<number>;
  allTasksCount$!: Observable<number>;
  taskCountByPriority$!: Observable<{ High: number, Medium: number, Low: number }>;

  constructor(private taskStore: TaskStoreService) { }

  ngOnInit(): void {
    this.tasksCount$ = this.taskStore.getTaskCount$();
    this.allTasksCount$ = this.taskStore.getAllTaskCount$();
    this.taskCountByPriority$ = this.taskStore.getTaskCountByPriority$();
  }

}
