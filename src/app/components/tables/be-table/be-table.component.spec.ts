import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeTableComponent } from './be-table.component';

describe('BeTableComponent', () => {
  let component: BeTableComponent;
  let fixture: ComponentFixture<BeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
