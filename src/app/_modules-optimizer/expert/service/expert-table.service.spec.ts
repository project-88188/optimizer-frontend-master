import { TestBed } from '@angular/core/testing';

import { ExpertTableService } from './expert-table.service';

describe('ExpertTableService', () => {
  let service: ExpertTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpertTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
