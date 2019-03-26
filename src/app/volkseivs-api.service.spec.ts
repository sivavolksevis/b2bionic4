import { TestBed } from '@angular/core/testing';

import { VolkseivsAPIService } from './volkseivs-api.service';

describe('VolkseivsAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VolkseivsAPIService = TestBed.get(VolkseivsAPIService);
    expect(service).toBeTruthy();
  });
});
