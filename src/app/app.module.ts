import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { HeaderComponent } from './header/header.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskAddFormComponent } from './task-add-form/task-add-form.component';
import { TaskComponent } from './task-list/task/task.component';
import { ProjectComponent } from './project-list/project/project.component';
import { BasicTaskAddFormComponent } from './task-add-form/basic-task-add-form/basic-task-add-form.component';
import { ExtendedTaskAddFormComponent } from './task-add-form/extended-task-add-form/extended-task-add-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './header/search-bar/search-bar.component';
import { EditTaskFormComponent } from './task-list/edit-task-form/edit-task-form.component';
import { BasicEditTaskFormComponent } from './task-list/edit-task-form/basic-edit-task-form/basic-edit-task-form.component';
import { ExtendedEditTaskFormComponent } from './task-list/edit-task-form/extended-edit-task-form/extended-edit-task-form.component';
import { AddProjectComponent } from './project-list/add-project/add-project.component';
import { LoaderComponent } from './loader/loader.component';
import { ToastComponent } from './toast/toast.component';
import { TagsComponent } from './tags/tags.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { NgSelectModule } from '@ng-select/ng-select';
import { EditProjectComponent } from './project-list/edit-project/edit-project.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    TaskListComponent,
    TaskAddFormComponent,
    TaskComponent,
    ProjectComponent,
    BasicTaskAddFormComponent,
    ExtendedTaskAddFormComponent,
    SearchBarComponent,
    EditTaskFormComponent,
    BasicEditTaskFormComponent,
    ExtendedEditTaskFormComponent,
    AddProjectComponent,
    LoaderComponent,
    ToastComponent,
    TagsComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgMultiSelectDropDownModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
