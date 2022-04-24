import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Task } from 'src/app/task-list/task';
import { TaskStoreService } from 'src/app/task-store.service';

@Component({
  selector: 'app-extended-add-form',
  templateUrl: './extended-add-form.component.html',
  styleUrls: ['./extended-add-form.component.scss']
})
export class ExtendedAddFormComponent implements OnInit {

  // addTaskForm = new FormGroup({
  //   title: new FormControl(''),
  //   description: new FormControl(''),
  //   priority: new FormControl('')
  // })

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
