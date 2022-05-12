import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-add-form',
  templateUrl: './task-add-form.component.html',
  styleUrls: ['./task-add-form.component.scss']
})
export class TaskAddFormComponent implements OnInit {

  navToTaskList = () => {
    this.router.navigateByUrl('/task-list');
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
