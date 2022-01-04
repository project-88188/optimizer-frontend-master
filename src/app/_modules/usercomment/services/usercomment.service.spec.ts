import { TestBed } from '@angular/core/testing';

import { UsercommentService } from './usercomment.service';

describe('UsercommentService', () => {
  let service: UsercommentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercommentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
