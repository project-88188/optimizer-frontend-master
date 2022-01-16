import { TestBed } from '@angular/core/testing';

import { TablesoptimizerService } from './tablesoptimizer.service';

describe('TablesoptimizerService', () => {
  let service: TablesoptimizerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablesoptimizerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
