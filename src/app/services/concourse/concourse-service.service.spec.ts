import { TestBed } from '@angular/core/testing';

import { ConcourseServiceService } from './concourse-service.service';

describe('ConcourseServiceService', () => {
  let service: ConcourseServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcourseServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
