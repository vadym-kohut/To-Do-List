import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Priority } from '../priority';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { TaskStoreLocalService } from 'src/app/services/task-store-local.service';
import { TaskStoreRemoteService } from 'src/app/services/task-store-remote.service';
import { TagStoreService } from 'src/app/services/tag-store.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';

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
    priority: Priority,
    tags: []
  })
  priorities = Priority;
  projects = this.projectStore.getWorkProjectList$();
  tagsDropdown: string[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private taskStore: TaskStoreLocalService,
    private fb: FormBuilder,
    private router: Router,
    private projectStore: ProjectDataService,
    private tagStore: TagStoreService
  ) { }


  onSubmit() {
    this.taskStore.addTask({ ...this.addTaskForm.value, priority: +this.addTaskForm.value.priority });
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.tagStore.getTags$().subscribe(tags => this.tagsDropdown = tags);

    this.dropdownSettings = {
      singleSelection: false,
      textField: 'tag',
      selectAllText: 'Select All Tags',
      unSelectAllText: 'UnSelect All Tags',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

  }

  get title() { return this.addTaskForm.get('title')! }
  get description() { return this.addTaskForm.get('description') }

}
