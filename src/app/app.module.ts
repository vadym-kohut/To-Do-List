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
import { EditProjectComponent } from './project-list/edit-project/edit-project.component';
import { DetailsEditProjectComponent } from './project-list/edit-project/details-edit-project/details-edit-project.component';
import { BasicEditProjectComponent } from './project-list/edit-project/basic-edit-project/basic-edit-project.component';
import { BasicAddFormComponent } from './task-add-form/basic-add-form/basic-add-form.component';
import { ExtendedAddFormComponent } from './task-add-form/extended-add-form/extended-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    HeaderComponent,
    TaskListComponent,
    TaskAddFormComponent,
    TaskComponent,
    ProjectComponent,
    EditProjectComponent,
    DetailsEditProjectComponent,
    BasicEditProjectComponent,
    BasicAddFormComponent,
    ExtendedAddFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
