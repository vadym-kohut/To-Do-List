import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { Router } from '@angular/router';
import {TaskDataService} from "../../services/task-data.service";

@Component({
  selector: 'app-basic-task-add-form',
  templateUrl: './basic-task-add-form.component.html',
  styleUrls: ['./basic-task-add-form.component.scss']
})
export class BasicTaskAddFormComponent implements OnInit {

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
  })

  constructor(
    private taskData: TaskDataService,
    private fb: FormBuilder, private router: Router
  ) { }

  onSubmit() {
    this.taskData.addTask(this.addTaskForm.value);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  get title() { return this.addTaskForm.get('title') }

}
