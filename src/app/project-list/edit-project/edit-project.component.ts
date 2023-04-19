import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDataService } from 'src/app/services/project-data.service';
import { Project } from '../../interfaces/project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  editProjectForm = this.fb.group({
    title: ['', Validators.required]
  })

  project!: Project;

  constructor(
    private fb: FormBuilder,
    private projectStore: ProjectDataService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  onSubmit() {
    this.router.navigateByUrl('/');
    this.project.title = this.editProjectForm.value.title;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.project = this.projectStore.getProjectById(params['id']));
    this.editProjectForm.controls['title'].setValue(this.project.title);
  }

  get title() { return this.editProjectForm.get('title') }

}
