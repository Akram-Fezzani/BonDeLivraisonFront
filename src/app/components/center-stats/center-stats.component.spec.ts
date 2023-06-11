import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterStatsComponent } from './center-stats.component';

describe('CenterStatsComponent', () => {
  let component: CenterStatsComponent;
  let fixture: ComponentFixture<CenterStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CenterStatsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
