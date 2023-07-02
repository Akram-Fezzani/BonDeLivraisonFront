import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectorsTableComponent } from './collectors-table.component';

describe('CollectorsTableComponent', () => {
  let component: CollectorsTableComponent;
  let fixture: ComponentFixture<CollectorsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectorsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectorsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
