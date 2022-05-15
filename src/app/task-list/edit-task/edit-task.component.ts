import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskStoreLocalService } from 'src/app/task-store-local.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private taskStore: TaskStoreLocalService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.taskStore.taskIdToEdit = params['id']);
  }

}
