import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAntennaComponent } from './update-antenna.component';

describe('UpdateAntennaComponent', () => {
  let component: UpdateAntennaComponent;
  let fixture: ComponentFixture<UpdateAntennaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateAntennaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAntennaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
