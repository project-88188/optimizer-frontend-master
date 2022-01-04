import { TestBed } from '@angular/core/testing';

import { OptimizercontrolTableService } from './optimizercontrol-table.service';

describe('OptimizercontrolTableService', () => {
  let service: OptimizercontrolTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OptimizercontrolTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
