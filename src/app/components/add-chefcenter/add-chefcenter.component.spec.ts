import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChefcenterComponent } from './add-chefcenter.component';

describe('AddChefcenterComponent', () => {
  let component: AddChefcenterComponent;
  let fixture: ComponentFixture<AddChefcenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChefcenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChefcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
