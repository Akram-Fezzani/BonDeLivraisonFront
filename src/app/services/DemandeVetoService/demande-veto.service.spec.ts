import { TestBed } from '@angular/core/testing';

import { DemandeVetoService } from './demande-veto.service';

describe('DemandeVetoService', () => {
  let service: DemandeVetoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeVetoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
