import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtendedAddFormComponent } from './extended-add-form.component';

describe('ExtendedAddFormComponent', () => {
  let component: ExtendedAddFormComponent;
  let fixture: ComponentFixture<ExtendedAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExtendedAddFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtendedAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
