import { TestBed } from '@angular/core/testing';

import { TransectionService } from './transection.service';

describe('TransectionService', () => {
  let service: TransectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
