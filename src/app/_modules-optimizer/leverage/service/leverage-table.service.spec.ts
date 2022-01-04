import { TestBed } from '@angular/core/testing';

import { LeverageTableService } from './leverage-table.service';

describe('LeverageTableService', () => {
  let service: LeverageTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeverageTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
