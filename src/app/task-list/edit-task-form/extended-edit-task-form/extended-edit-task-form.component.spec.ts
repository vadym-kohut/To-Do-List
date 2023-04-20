import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedEditTaskFormComponent } from './extended-edit-task-form.component';

describe('ExtendedEditTaskComponent', () => {
  let component: ExtendedEditTaskFormComponent;
  let fixture: ComponentFixture<ExtendedEditTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedEditTaskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedEditTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
