import { TestBed } from '@angular/core/testing';

import { SymbolTableService } from './symbol-table.service';

describe('SymbolTableService', () => {
  let service: SymbolTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SymbolTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
