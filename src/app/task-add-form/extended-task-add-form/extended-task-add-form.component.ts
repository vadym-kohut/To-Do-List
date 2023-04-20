import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Priority } from '../../shared/priority';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { TagDataService } from 'src/app/services/tag-data.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import {Tag} from "../../shared/tag";
import {TaskDataService} from "../../services/task-data.service";

@Component({
  selector: 'app-extended-task-add-form',
  templateUrl: './extended-task-add-form.component.html',
  styleUrls: ['./extended-task-add-form.component.scss']
})
export class ExtendedTaskAddFormComponent implements OnInit {

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
    description: ['', Validators.minLength(5)],
    project: [''],
    priority: Priority,
    tags: []
  })
  priorities = Priority;
  projects = this.projectStore.getWorkProjectList$();
  tagsDropdown: Tag[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private taskData: TaskDataService,
    private fb: FormBuilder,
    private router: Router,
    private projectStore: ProjectDataService,
    private tagStore: TagDataService
  ) { }


  onSubmit() {
    this.taskData.addTask({ ...this.addTaskForm.value, priority: +this.addTaskForm.value.priority });
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.tagStore.getTagList$().subscribe(tags => this.tagsDropdown = tags);

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
