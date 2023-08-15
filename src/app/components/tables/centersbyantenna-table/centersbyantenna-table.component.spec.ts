import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CentersbyantennaTableComponent } from './centersbyantenna-table.component';

describe('CentersbyantennaTableComponent', () => {
  let component: CentersbyantennaTableComponent;
  let fixture: ComponentFixture<CentersbyantennaTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CentersbyantennaTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CentersbyantennaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
