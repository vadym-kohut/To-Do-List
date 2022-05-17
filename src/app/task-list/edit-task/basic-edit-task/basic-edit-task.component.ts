import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { TaskStoreLocalService } from 'src/app/task-store-local.service';
import { Task } from '../../task';

@Component({
  selector: 'app-basic-edit-task',
  templateUrl: './basic-edit-task.component.html',
  styleUrls: ['./basic-edit-task.component.scss']
})
export class BasicEditTaskComponent implements OnInit {

  taskToEdit!: Task;

  constructor(private taskStore: TaskStoreLocalService, private fb: FormBuilder) { }

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]]
  })

  ngOnInit(): void {
    this.taskToEdit = this.taskStore.getTaskToEdit();
    console.log(this.taskToEdit);
    this.addTaskForm.controls['title'].setValue(this.taskToEdit.title);
    console.log(this.taskStore.taskIdToEdit, this.taskToEdit.title);
  }

  get title() { return this.addTaskForm.get('title') }

}
