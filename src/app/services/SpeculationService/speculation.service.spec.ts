import { TestBed } from '@angular/core/testing';

import { SpeculationService } from './speculation.service';

describe('SpeculationService', () => {
  let service: SpeculationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeculationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
