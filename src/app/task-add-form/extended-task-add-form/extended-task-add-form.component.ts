import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Priority} from '../../shared/priority';
import {taskTitleValidator} from 'src/app/shared/task-title.validator';
import {ProjectDataService} from 'src/app/services/project-data.service';
import {TagDataService} from 'src/app/services/tag-data.service';
import {IDropdownSettings} from 'ng-multiselect-dropdown';
import {TaskDataService} from "../../services/task-data.service";
import {map} from "rxjs";

@Component({
  selector: 'app-extended-task-add-form',
  templateUrl: './extended-task-add-form.component.html',
  styleUrls: ['./extended-task-add-form.component.scss']
})
export class ExtendedTaskAddFormComponent implements OnInit {
  taskAddForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
    description: ['', Validators.minLength(5)],
    project: [''],
    priority: Priority,
    tagList: []
  })
  priority = Priority;
  projectList = this.projectData.getWorkProjectList$();
  tagDropdownList: string[] = [];
  dropdownSettings: IDropdownSettings = {};

  constructor(
    private taskData: TaskDataService,
    private fb: FormBuilder,
    private router: Router,
    private projectData: ProjectDataService,
    private tagData: TagDataService
  ) {
  }

  onSubmit() {
    this.taskData.addTask({...this.taskAddForm.value, priority: +this.taskAddForm.value.priority});
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.tagData.getTagList$().pipe(
      map(tagArray => this.tagDropdownList = tagArray.map(tagObj => tagObj.tagName)),
    ).subscribe()

    this.dropdownSettings = {
      singleSelection: false,
      textField: 'tag',
      selectAllText: 'Select All Tags',
      unSelectAllText: 'UnSelect All Tags',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  get title() {
    return this.taskAddForm.get('title')!
  }

  get description() {
    return this.taskAddForm.get('description')
  }
}
