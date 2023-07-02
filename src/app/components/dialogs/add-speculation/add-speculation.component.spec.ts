import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpeculationComponent } from './add-speculation.component';

describe('AddSpeculationComponent', () => {
  let component: AddSpeculationComponent;
  let fixture: ComponentFixture<AddSpeculationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSpeculationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpeculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
