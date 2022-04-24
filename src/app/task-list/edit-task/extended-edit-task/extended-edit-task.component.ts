import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Task } from 'src/app/task-list/task';
import { TaskStoreService } from 'src/app/task-store.service';

@Component({
  selector: 'app-extended-edit-task',
  templateUrl: './extended-edit-task.component.html',
  styleUrls: ['./extended-edit-task.component.scss']
})
export class ExtendedEditTaskComponent implements OnInit {

  addTaskForm = this.fb.group({
    title: [''],
    description: [''],
    priority: ['']
  })

  constructor(private taskStore: TaskStoreService, private fb: FormBuilder) { }
  tasks = this.taskStore.getTasks();

  onSubmit() {
    console.log(this.addTaskForm.value);
  }

  ngOnInit(): void {
  }

}
