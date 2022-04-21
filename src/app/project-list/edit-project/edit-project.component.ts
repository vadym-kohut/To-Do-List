import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  navToTaskList = () => {
    this.router.navigateByUrl('/task-list');
  }

  editProject = () => {
    console.log('Project Edited!');
  }

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
