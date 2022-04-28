import { TestBed } from '@angular/core/testing';

import { SearchQueryServiceService } from './search-query-service.service';

describe('SearchQueryServiceService', () => {
  let service: SearchQueryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchQueryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
