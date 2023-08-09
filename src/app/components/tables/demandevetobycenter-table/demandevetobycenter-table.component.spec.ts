import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandevetobycenterTableComponent } from './demandevetobycenter-table.component';

describe('DemandevetobycenterTableComponent', () => {
  let component: DemandevetobycenterTableComponent;
  let fixture: ComponentFixture<DemandevetobycenterTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandevetobycenterTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandevetobycenterTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
