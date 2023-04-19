import { TestBed } from '@angular/core/testing';

import { SearchQueryDataService } from './search-query-data.service';

describe('SearchQueryServiceService', () => {
  let service: SearchQueryDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchQueryDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
