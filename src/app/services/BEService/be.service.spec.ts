import { TestBed } from '@angular/core/testing';

import { BEService } from './be.service';

describe('BEService', () => {
  let service: BEService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BEService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
