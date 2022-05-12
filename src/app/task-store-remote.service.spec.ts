import { TestBed } from '@angular/core/testing';

import { TaskStoreRemoteService } from './task-store-remote.service';

describe('TaskStoreRemoteService', () => {
  let service: TaskStoreRemoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskStoreRemoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
