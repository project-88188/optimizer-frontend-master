import { TestBed } from '@angular/core/testing';

import { DepositTableService } from './deposit-table.service';

describe('DepositTableService', () => {
  let service: DepositTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
