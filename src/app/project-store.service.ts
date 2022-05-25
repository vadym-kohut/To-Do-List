import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';
import { Project } from './project-list/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectStoreService {

  private workProjects$ = new BehaviorSubject<Project[]>([
    {
      title: 'First Project',
      id: 1
    },
    {
      title: 'Second Project',
      id: 2
    },
    {
      title: 'Third Project',
      id: 3
    },
    {
      title: 'Fourth Project',
      id: 4
    }
  ]);

  private projectToShow$ = new BehaviorSubject<number | null>(null);

  constructor(private router: Router) { }

  getProjects$(): Observable<Project[]> {
    return this.workProjects$.asObservable();
  }

  addProject(project: Project) {
    project.id = this.workProjects$.getValue().length + 1;
    this.workProjects$.next([...this.workProjects$.getValue(), project]);
  }

  deleteProject(id: number) {
    this.workProjects$.next(this.workProjects$.getValue().filter((project) => project.id !== id));
  }

  setProjectToShow(id: number | null) {
    this.projectToShow$.next(id);
  }

  getProjectToShow$() {
    return this.projectToShow$.asObservable();
  }

  clearProjectFilter() {
    this.projectToShow$.next(null);
  }

  getProjectById(id: number): Project {
    return this.workProjects$.getValue().filter((project: Project) => project.id == id)[0];
  }

  updateProject(project: Project): void {
    this.workProjects$.next(
      this.workProjects$.getValue().map(p => {
        if (project.id == p.id) {
          return project;
        } else {
          return p;
        }
      })
    )
  }

}
