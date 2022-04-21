import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicEditProjectComponent } from './project-list/edit-project/basic-edit-project/basic-edit-project.component';
import { DetailsEditProjectComponent } from './project-list/edit-project/details-edit-project/details-edit-project.component';
import { EditProjectComponent } from './project-list/edit-project/edit-project.component';
import { BasicAddFormComponent } from './task-add-form/basic-add-form/basic-add-form.component';
import { ExtendedAddFormComponent } from './task-add-form/extended-add-form/extended-add-form.component';
import { TaskAddFormComponent } from './task-add-form/task-add-form.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  {
    path: 'add', component: TaskAddFormComponent,
    children: [
      { path: 'basic', component: BasicAddFormComponent },
      { path: 'extended', component: ExtendedAddFormComponent }
    ]
  },
  { path: 'edit/:id', component: TaskAddFormComponent },
  { path: 'edit', component: TaskAddFormComponent },
  {
    path: 'edit-project/:id', component: EditProjectComponent,
    children: [
      { path: 'basic', component: BasicEditProjectComponent },
      { path: 'details', component: DetailsEditProjectComponent }
    ]
  },
  { path: 'edit-project', component: EditProjectComponent },
  // { path: 'edit-project/:id/**', redirectTo: 'edit-project/:id/basic' },
  { path: '**', redirectTo: 'task-list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
