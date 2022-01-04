import { TestBed } from '@angular/core/testing';

import { TestercontrolTableService } from './testercontrol-table.service';

describe('TestercontrolTableService', () => {
  let service: TestercontrolTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestercontrolTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
