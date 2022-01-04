import { TestBed } from '@angular/core/testing';

import { PeriodTableService } from './period-table.service';

describe('PeriodTableService', () => {
  let service: PeriodTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeriodTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
