import { TestBed } from '@angular/core/testing';

import { TaskStoreLocalService } from './task-store-local.service';

describe('TaskStoreLocalService', () => {
  let service: TaskStoreLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStoreLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
