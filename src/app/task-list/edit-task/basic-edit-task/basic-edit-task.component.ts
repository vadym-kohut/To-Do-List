import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { TaskStoreLocalService } from 'src/app/task-store-local.service';

@Component({
  selector: 'app-basic-edit-task',
  templateUrl: './basic-edit-task.component.html',
  styleUrls: ['./basic-edit-task.component.scss']
})
export class BasicEditTaskComponent implements OnInit {

  constructor(private taskStore: TaskStoreLocalService, private fb: FormBuilder) { }

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]]
  })

  ngOnInit(): void {
  }

  get title() { return this.addTaskForm.get('title') }

}
