import { TestBed } from '@angular/core/testing';

import { CourseclassContextService } from './courseclass-context.service';

describe('CourseclassContextService', () => {
  let service: CourseclassContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseclassContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
