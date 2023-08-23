import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorsByAntennaTableComponent } from './collectors-by-antenna-table.component';

describe('CollectorsByAntennaTableComponent', () => {
  let component: CollectorsByAntennaTableComponent;
  let fixture: ComponentFixture<CollectorsByAntennaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorsByAntennaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorsByAntennaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
