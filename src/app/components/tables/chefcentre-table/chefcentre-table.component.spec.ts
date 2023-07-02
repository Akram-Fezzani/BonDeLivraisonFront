import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChefcentreTableComponent } from './chefcentre-table.component';

describe('ChefcentreTableComponent', () => {
  let component: ChefcentreTableComponent;
  let fixture: ComponentFixture<ChefcentreTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChefcentreTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChefcentreTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
