import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEditTaskComponent } from './basic-edit-task.component';

describe('BasicEditTaskComponent', () => {
  let component: BasicEditTaskComponent;
  let fixture: ComponentFixture<BasicEditTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicEditTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEditTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
