import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeculationTableComponent } from './speculation-table.component';

describe('SpeculationTableComponent', () => {
  let component: SpeculationTableComponent;
  let fixture: ComponentFixture<SpeculationTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeculationTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeculationTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
