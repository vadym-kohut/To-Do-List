import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details-edit-project',
  templateUrl: './details-edit-project.component.html',
  styleUrls: ['./details-edit-project.component.scss']
})
export class DetailsEditProjectComponent implements OnInit {

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
