import { TestBed } from '@angular/core/testing';

import { UsercontentService } from './usercontent.service';

describe('UsercontentService', () => {
  let service: UsercontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
