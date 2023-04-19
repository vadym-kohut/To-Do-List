import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Project} from '../interfaces/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectDataService {

  private workProjectList$ = new BehaviorSubject<Project[]>([
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

  private selectedProject$ = new BehaviorSubject<Project | null>(null);

  // PROJECT LIST
  getWorkProjectList$(): Observable<Project[]> {
    return this.workProjectList$.asObservable();
  }

  addProject(project: Project) {
    project.id = this.workProjectList$.getValue().length + 1;
    this.workProjectList$.next([...this.workProjectList$.getValue(), project]);
  }

  removeProject(id: number) {
    this.workProjectList$.next(this.workProjectList$.getValue().filter((project) => project.id !== id));
  }

  // SELECTED PROJECT
  setSelectedProject(project: Project) {
    this.selectedProject$.next(project);
  }

  getSelectedProject$(): Observable<Project | null> {
    return this.selectedProject$.asObservable();
  }

  clearSelectedProject() {
    this.selectedProject$.next(null);
  }

  getProjectById(id: number): Project {
    return this.workProjectList$.getValue().filter((project: Project) => project.id == id)[0];
  }
}
