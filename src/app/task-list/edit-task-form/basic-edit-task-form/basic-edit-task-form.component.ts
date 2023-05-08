import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {taskTitleValidator} from 'src/app/shared/task-title.validator';
import {Task} from '../../../shared/task';
import {TaskDataService} from "../../../services/task-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-basic-edit-task-form',
  templateUrl: './basic-edit-task-form.component.html',
  styleUrls: ['./basic-edit-task-form.component.scss']
})
export class BasicEditTaskFormComponent implements OnInit {

  taskToEdit!: Task;

  constructor(
    private taskData: TaskDataService,
    private fb: FormBuilder,
    private router: Router
  ) {
  }

  taskEditForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]]
  })

  ngOnInit(): void {
    this.taskToEdit = this.taskData.getTaskToEdit();
    this.taskEditForm.controls['title'].setValue(this.taskToEdit.title);
  }

  get title() {
    return this.taskEditForm.get('title')
  }

  onSubmit() {
    this.taskToEdit.title = this.title?.value;
    this.taskData.editTask(this.taskToEdit);
    this.router.navigateByUrl('/');
  }

}
