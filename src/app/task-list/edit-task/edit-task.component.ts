import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {TaskDataService} from "../../services/task-data.service";

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private taskData: TaskDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.taskData.taskIdToEdit = params['id']);
  }

}
