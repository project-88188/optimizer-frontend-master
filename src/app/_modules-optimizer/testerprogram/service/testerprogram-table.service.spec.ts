import { TestBed } from '@angular/core/testing';

import { TesterprogramTableService } from './testerprogram-table.service';

describe('TesterprogramTableService', () => {
  let service: TesterprogramTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesterprogramTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
