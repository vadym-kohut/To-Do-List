import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from 'src/app/task-list/task';
import { TaskStoreService } from 'src/app/task-store.service';

@Component({
  selector: 'app-extended-add-form',
  templateUrl: './extended-add-form.component.html',
  styleUrls: ['./extended-add-form.component.scss']
})
export class ExtendedAddFormComponent implements OnInit {

  newTask: Task = {
    title: '',
    description: '',
    priority: 0,
    id: 0
  }

  constructor(private taskStore: TaskStoreService) { }
  tasks = this.taskStore.getTasks();

  onSubmit() {
    this.taskStore.addTask(this.newTask);
    this.tasks = this.taskStore.getTasks();
    console.log(this.newTask);
    console.log(this.taskStore.tasks);
  }

  ngOnInit(): void {
  }

}
