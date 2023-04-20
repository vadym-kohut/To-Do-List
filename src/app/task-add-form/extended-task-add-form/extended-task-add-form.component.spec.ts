import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedTaskAddFormComponent } from './extended-task-add-form.component';

describe('ExtendedAddFormComponent', () => {
  let component: ExtendedTaskAddFormComponent;
  let fixture: ComponentFixture<ExtendedTaskAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedTaskAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedTaskAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
