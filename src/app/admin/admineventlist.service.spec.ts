import { TestBed } from '@angular/core/testing';

import { AdmineventlistService } from './admineventlist.service';

describe('AdmineventlistService', () => {
  let service: AdmineventlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmineventlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
