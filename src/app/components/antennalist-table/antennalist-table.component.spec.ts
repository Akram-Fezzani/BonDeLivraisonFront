import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AntennalistTableComponent } from './antennalist-table.component';

describe('AntennalistTableComponent', () => {
  let component: AntennalistTableComponent;
  let fixture: ComponentFixture<AntennalistTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AntennalistTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AntennalistTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
