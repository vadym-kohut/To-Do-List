import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './project-list/add-project/add-project.component';
import { EditProjectComponent } from './project-list/edit-project/edit-project.component';
import { BasicTaskAddFormComponent } from './task-add-form/basic-task-add-form/basic-task-add-form.component';
import { ExtendedTaskAddFormComponent } from './task-add-form/extended-task-add-form/extended-task-add-form.component';
import { TaskAddFormComponent } from './task-add-form/task-add-form.component';
import { BasicEditTaskFormComponent } from './task-list/edit-task-form/basic-edit-task-form/basic-edit-task-form.component';
import { EditTaskFormComponent } from './task-list/edit-task-form/edit-task-form.component';
import { ExtendedEditTaskFormComponent } from './task-list/edit-task-form/extended-edit-task-form/extended-edit-task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  {
    path: 'add-task', component: TaskAddFormComponent,
    children: [
      { path: 'basic', component: BasicTaskAddFormComponent },
      { path: 'extended', component: ExtendedTaskAddFormComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  },
  {
    path: 'edit-task-form/:id', component: EditTaskFormComponent,
    children: [
      { path: 'basic', component: BasicEditTaskFormComponent },
      { path: 'extended', component: ExtendedEditTaskFormComponent },
      { path: '**', redirectTo: 'basic' }
    ]
  },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: '**', redirectTo: 'task-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
