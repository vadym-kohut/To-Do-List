import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {taskTitleValidator} from 'src/app/shared/task-title.validator';
import {Task} from '../../../shared/task';
import {TaskDataService} from "../../../services/task-data.service";

@Component({
  selector: 'app-basic-edit-task',
  templateUrl: './basic-edit-task.component.html',
  styleUrls: ['./basic-edit-task.component.scss']
})
export class BasicEditTaskComponent implements OnInit {

  taskToEdit!: Task;

  constructor(
    private taskData: TaskDataService,
    private fb: FormBuilder) {
  }

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]]
  })

  ngOnInit(): void {
    this.taskToEdit = this.taskData.getTaskToEdit();
    this.addTaskForm.controls['title'].setValue(this.taskToEdit.title);
  }

  get title() {
    return this.addTaskForm.get('title')
  }

}
