import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  addProjectForm = this.fb.group({
    title: ['', Validators.required]
  })

  constructor(
    private fb: FormBuilder,
    private projectStore: ProjectDataService,
    private router: Router
  ) { }

  onSubmit() {
    this.projectStore.addProject(this.addProjectForm.value);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }

  get title() { return this.addProjectForm.get('title') }

}
