import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { Router } from '@angular/router';
import { TaskStoreLocalService } from 'src/app/task-store-local.service';
import { TaskStoreRemoteService } from 'src/app/task-store-remote.service';

@Component({
  selector: 'app-basic-add-form',
  templateUrl: './basic-add-form.component.html',
  styleUrls: ['./basic-add-form.component.scss']
})
export class BasicAddFormComponent implements OnInit {

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
  })

  constructor(private taskStore: TaskStoreRemoteService, private fb: FormBuilder, private router: Router) { }

  onSubmit() {
    this.taskStore.addTask(this.addTaskForm.value);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  get title() { return this.addTaskForm.get('title') }

}
