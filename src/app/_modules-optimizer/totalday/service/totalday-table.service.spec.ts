import { TestBed } from '@angular/core/testing';

import { TotaldayTableService } from './totalday-table.service';

describe('TotaldayTableService', () => {
  let service: TotaldayTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotaldayTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
