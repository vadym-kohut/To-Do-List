import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTaskAddFormComponent } from './basic-task-add-form.component';

describe('BasicAddFormComponent', () => {
  let component: BasicTaskAddFormComponent;
  let fixture: ComponentFixture<BasicTaskAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicTaskAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTaskAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
