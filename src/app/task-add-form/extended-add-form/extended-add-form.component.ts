import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-extended-add-form',
  templateUrl: './extended-add-form.component.html',
  styleUrls: ['./extended-add-form.component.scss']
})
export class ExtendedAddFormComponent implements OnInit {

  taskTitle = '';
  taskDescription = '';
  taskPriority: any;

  onSubmit() {
    console.log(this.taskTitle);
    console.log(this.taskDescription);
    console.log(this.taskPriority);


  }

  constructor() { }

  ngOnInit(): void {
  }

}
