import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentresTableComponent } from './centres-table.component';

describe('CentresTableComponent', () => {
  let component: CentresTableComponent;
  let fixture: ComponentFixture<CentresTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentresTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentresTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
