import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingByAntennaTableComponent } from './building-by-antenna-table.component';

describe('BuildingByAntennaTableComponent', () => {
  let component: BuildingByAntennaTableComponent;
  let fixture: ComponentFixture<BuildingByAntennaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildingByAntennaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingByAntennaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
