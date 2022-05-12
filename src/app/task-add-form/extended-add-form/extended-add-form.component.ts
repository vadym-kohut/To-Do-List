import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Priority } from '../priority';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { ProjectStoreService } from 'src/app/project-store.service';
import { TaskStoreLocalService } from 'src/app/task-store-local.service';
import { TaskStoreRemoteService } from 'src/app/task-store-remote.service';

@Component({
  selector: 'app-extended-add-form',
  templateUrl: './extended-add-form.component.html',
  styleUrls: ['./extended-add-form.component.scss']
})
export class ExtendedAddFormComponent implements OnInit {

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
    description: ['', Validators.minLength(5)],
    project: [''],
    priority: Priority
  })
  priorities = Priority;
  projects = this.projectStore.getProjects$();

  constructor(private taskStore: TaskStoreRemoteService, private fb: FormBuilder, private router: Router,
    private projectStore: ProjectStoreService) { }


  onSubmit() {
    this.taskStore.addTask({ ...this.addTaskForm.value, priority: +this.addTaskForm.value.priority });
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  get title() { return this.addTaskForm.get('title')! }
  get description() { return this.addTaskForm.get('description') }

}
