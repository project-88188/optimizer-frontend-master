import { TestBed } from '@angular/core/testing';

import { TesterresultTableService } from './testerresult-table.service';

describe('TesterresultTableService', () => {
  let service: TesterresultTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesterresultTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
