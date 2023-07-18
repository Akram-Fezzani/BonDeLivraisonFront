import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiculeTableComponent } from './vehicule-table.component';

describe('VehiculeTableComponent', () => {
  let component: VehiculeTableComponent;
  let fixture: ComponentFixture<VehiculeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehiculeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
