import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { Priority } from 'src/app/shared/priority';
import {TaskDataService} from "../../../services/task-data.service";

@Component({
  selector: 'app-extended-edit-task-form',
  templateUrl: './extended-edit-task-form.component.html',
  styleUrls: ['./extended-edit-task-form.component.scss']
})
export class ExtendedEditTaskFormComponent implements OnInit {

  editTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
    description: ['', Validators.minLength(5)],
    project: [''],
    priority: Priority
  })

  constructor(
    private taskData: TaskDataService,
    private fb: FormBuilder,
  ) { }

  onSubmit() {
  }

  ngOnInit(): void {
  }

  get title() { return this.editTaskForm.get('title') }
  get description() { return this.editTaskForm.get('description') }

}
