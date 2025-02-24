import { TestBed } from '@angular/core/testing';

import { ConcourseserviceService } from './concourseservice.service';

describe('ConcourseserviceService', () => {
  let service: ConcourseserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConcourseserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
