import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicEditProjectComponent } from './project-list/edit-project/basic-edit-project/basic-edit-project.component';
import { DetailsEditProjectComponent } from './project-list/edit-project/details-edit-project/details-edit-project.component';
import { EditProjectComponent } from './project-list/edit-project/edit-project.component';
import { BasicAddFormComponent } from './task-add-form/basic-add-form/basic-add-form.component';
import { ExtendedAddFormComponent } from './task-add-form/extended-add-form/extended-add-form.component';
import { TaskAddFormComponent } from './task-add-form/task-add-form.component';
import { BasicEditTaskComponent } from './task-list/edit-task/basic-edit-task/basic-edit-task.component';
import { EditTaskComponent } from './task-list/edit-task/edit-task.component';
import { ExtendedEditTaskComponent } from './task-list/edit-task/extended-edit-task/extended-edit-task.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  {
    path: 'add-task', component: TaskAddFormComponent,
    children: [
      { path: 'basic', component: BasicAddFormComponent },
      { path: 'extended', component: ExtendedAddFormComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  },
  {
    path: 'edit-task/:id', component: EditTaskComponent,
    children: [
      { path: 'basic', component: BasicEditTaskComponent },
      { path: 'extended', component: ExtendedEditTaskComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  },
  {
    path: 'edit-project/:id', component: EditProjectComponent,
    children: [
      { path: 'basic', component: BasicEditProjectComponent },
      { path: 'details', component: DetailsEditProjectComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  },
  { path: 'edit-project', component: EditProjectComponent },
  { path: '**', redirectTo: 'task-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
