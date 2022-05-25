import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProjectComponent } from './project-list/add-project/add-project.component';
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
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },
  { path: '**', redirectTo: 'task-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
