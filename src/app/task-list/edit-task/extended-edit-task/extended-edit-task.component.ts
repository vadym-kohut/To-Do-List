import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { Priority } from 'src/app/task-add-form/priority';
import { TaskStoreLocalService } from 'src/app/task-store-local.service';

@Component({
  selector: 'app-extended-edit-task',
  templateUrl: './extended-edit-task.component.html',
  styleUrls: ['./extended-edit-task.component.scss']
})
export class ExtendedEditTaskComponent implements OnInit {

  editTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
    description: ['', Validators.minLength(5)],
    project: [''],
    priority: Priority
  })

  constructor(
    private taskStore: TaskStoreLocalService,
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) { }

  onSubmit() {
  }

  ngOnInit(): void {
  }

  get title() { return this.editTaskForm.get('title') }
  get description() { return this.editTaskForm.get('description') }

}
