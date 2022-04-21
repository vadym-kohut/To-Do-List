import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProjectComponent } from './project-list/edit-project/edit-project.component';
import { TaskAddFormComponent } from './task-add-form/task-add-form.component';
import { TaskListComponent } from './task-list/task-list.component';

const routes: Routes = [
  { path: 'task-list', component: TaskListComponent },
  { path: 'add', component: TaskAddFormComponent },
  { path: 'edit/:id', component: TaskAddFormComponent },
  { path: 'edit', component: TaskAddFormComponent },
  {
    path: 'edit-project/:id', component: EditProjectComponent,
    children: [
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
