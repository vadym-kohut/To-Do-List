import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TaskStoreService } from 'src/app/task-store.service';
import { taskTitleValidator } from 'src/app/shared/task-title.validator';

@Component({
  selector: 'app-extended-edit-task',
  templateUrl: './extended-edit-task.component.html',
  styleUrls: ['./extended-edit-task.component.scss']
})
export class ExtendedEditTaskComponent implements OnInit {

  addTaskForm = this.fb.group({
    title: ['', [Validators.required, Validators.maxLength(20), taskTitleValidator]],
    description: ['', Validators.minLength(5)],
    priority: ['']
  })

  constructor(private taskStore: TaskStoreService, private fb: FormBuilder) { }
  tasks = this.taskStore.getTasks();

  onSubmit() {
    console.log(this.addTaskForm.value);
  }

  ngOnInit(): void {
  }

  get title() { return this.addTaskForm.get('title') }
  get description() { return this.addTaskForm.get('description') }

}
