import { TestBed } from '@angular/core/testing';

import { VetoService } from './veto.service';

describe('VetoService', () => {
  let service: VetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
