import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {taskTitleValidator} from 'src/app/shared/task-title.validator';
import {Priority} from 'src/app/shared/priority';
import {TaskDataService} from "../../../services/task-data.service";
import {Task} from "../../../shared/task";
import {ProjectDataService} from "../../../services/project-data.service";
import {Project} from "../../../shared/project";
import {map, Observable} from "rxjs";
import {IDropdownSettings} from "ng-multiselect-dropdown";
import {TagDataService} from "../../../services/tag-data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-extended-edit-task-form',
  templateUrl: './extended-edit-task-form.component.html',
  styleUrls: ['./extended-edit-task-form.component.scss']
})
export class ExtendedEditTaskFormComponent implements OnInit {

  taskToEdit!: Task;
  projectList$: Observable<Project[]> = this.projectData.getWorkProjectList$();
  priority = Priority;

  tagDropdownList: string[] = [];

  dropdownSettings: IDropdownSettings = {
    singleSelection: false,
    textField: 'tag',
    selectAllText: 'Select All Tags',
    unSelectAllText: 'UnSelect All Tags',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };

  taskEditForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
    description: ['', Validators.minLength(5)],
    project: [''],
    priority: [''],
    tags: ['']
  })

  constructor(
    private taskData: TaskDataService,
    private projectData: ProjectDataService,
    private fb: FormBuilder,
    private tagData: TagDataService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.tagData.getTagList$().pipe(
      map(tagArray => this.tagDropdownList = tagArray.map(tagObj => tagObj.tagName)),
    ).subscribe()

    this.taskToEdit = this.taskData.getTaskToEdit();
    this.taskEditForm.controls['title'].setValue(this.taskToEdit.title);
    this.taskEditForm.controls['description'].setValue(this.taskToEdit.description);
    this.taskEditForm.controls['project'].setValue(this.taskToEdit.project);
    this.taskEditForm.controls['priority'].setValue(this.taskToEdit.priority);
    this.taskEditForm.controls['tags'].setValue(this.taskToEdit.tags);
  }

  onSubmit() {
    this.taskData.editTask({
      ...this.taskEditForm.value,
      id: this.taskToEdit.id
    });
    this.router.navigateByUrl('/');
  }

  get title() {
    return this.taskEditForm.get('title')
  }

  get description() {
    return this.taskEditForm.get('description')
  }

}
