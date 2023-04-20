import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEditTaskFormComponent } from './basic-edit-task-form.component';

describe('BasicEditTaskComponent', () => {
  let component: BasicEditTaskFormComponent;
  let fixture: ComponentFixture<BasicEditTaskFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicEditTaskFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEditTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
