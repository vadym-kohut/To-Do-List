import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicAddFormComponent } from './basic-add-form.component';

describe('BasicAddFormComponent', () => {
  let component: BasicAddFormComponent;
  let fixture: ComponentFixture<BasicAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BasicAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
