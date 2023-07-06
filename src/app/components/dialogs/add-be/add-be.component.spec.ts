import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBeComponent } from './add-be.component';

describe('AddBeComponent', () => {
  let component: AddBeComponent;
  let fixture: ComponentFixture<AddBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
