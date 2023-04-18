import { TestBed } from '@angular/core/testing';

import { ServeUService } from './serve-u.service';

describe('ServeUService', () => {
  let service: ServeUService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeUService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
