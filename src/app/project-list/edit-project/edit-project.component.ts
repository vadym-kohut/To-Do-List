import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {ProjectDataService} from 'src/app/services/project-data.service';
import {Project} from '../../shared/project';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  projectEditForm = this.fb.group({
    title: ['', Validators.required]
  })

  projectToEdit!: Project;

  constructor(
    private fb: FormBuilder,
    private projectData: ProjectDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  onSubmit() {
    this.projectToEdit.title = this.projectEditForm.value.title;
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.projectToEdit = this.projectData.getProjectById(params['id']));
    this.projectEditForm.controls['title'].setValue(this.projectToEdit.title);
  }

  get projectToEditTitle() {
    return this.projectEditForm.get('title');
  }

}
