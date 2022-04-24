import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedEditTaskComponent } from './extended-edit-task.component';

describe('ExtendedEditTaskComponent', () => {
  let component: ExtendedEditTaskComponent;
  let fixture: ComponentFixture<ExtendedEditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedEditTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
