import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsEditProjectComponent } from './details-edit-project.component';

describe('DetailsEditProjectComponent', () => {
  let component: DetailsEditProjectComponent;
  let fixture: ComponentFixture<DetailsEditProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsEditProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsEditProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
