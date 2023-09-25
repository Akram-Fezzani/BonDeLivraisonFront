import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBeComponent } from './update-be.component';

describe('UpdateBeComponent', () => {
  let component: UpdateBeComponent;
  let fixture: ComponentFixture<UpdateBeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
