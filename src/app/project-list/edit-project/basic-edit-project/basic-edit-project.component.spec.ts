import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicEditProjectComponent } from './basic-edit-project.component';

describe('BasicEditProjectComponent', () => {
  let component: BasicEditProjectComponent;
  let fixture: ComponentFixture<BasicEditProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicEditProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
