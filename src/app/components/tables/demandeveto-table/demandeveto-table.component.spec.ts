import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandevetoTableComponent } from './demandeveto-table.component';

describe('DemandevetoTableComponent', () => {
  let component: DemandevetoTableComponent;
  let fixture: ComponentFixture<DemandevetoTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandevetoTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandevetoTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
