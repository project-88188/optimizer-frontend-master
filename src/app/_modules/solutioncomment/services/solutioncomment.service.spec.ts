import { TestBed } from '@angular/core/testing';

import { SolutioncommentService } from './solutioncomment.service';

describe('SolutioncommentService', () => {
  let service: SolutioncommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolutioncommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
