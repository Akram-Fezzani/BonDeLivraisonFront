import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteTableComponent } from './societe-table.component';

describe('SocieteTableComponent', () => {
  let component: SocieteTableComponent;
  let fixture: ComponentFixture<SocieteTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocieteTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
