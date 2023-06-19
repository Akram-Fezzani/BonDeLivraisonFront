import { TestBed } from '@angular/core/testing';

import { ChefcenterService } from './chefcenter.service';

describe('ChefcenterService', () => {
  let service: ChefcenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChefcenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
