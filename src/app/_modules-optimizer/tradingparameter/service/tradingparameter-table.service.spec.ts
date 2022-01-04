import { TestBed } from '@angular/core/testing';

import { TradingparameterTableService } from './tradingparameter-table.service';

describe('TradingparameterTableService', () => {
  let service: TradingparameterTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradingparameterTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
