import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VetoByAntennaTableComponent } from './veto-by-antenna-table.component';

describe('VetoByAntennaTableComponent', () => {
  let component: VetoByAntennaTableComponent;
  let fixture: ComponentFixture<VetoByAntennaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VetoByAntennaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VetoByAntennaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
