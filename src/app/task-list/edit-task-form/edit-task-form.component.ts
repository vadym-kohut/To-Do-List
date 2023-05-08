import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TaskDataService} from "../../services/task-data.service";

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.scss']
})
export class EditTaskFormComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private taskData: TaskDataService) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.taskData.taskIdToEdit = params['id']);
  }

}
