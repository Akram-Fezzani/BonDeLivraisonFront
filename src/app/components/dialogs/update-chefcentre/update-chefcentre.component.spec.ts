import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateChefcentreComponent } from './update-chefcentre.component';

describe('UpdateChefcentreComponent', () => {
  let component: UpdateChefcentreComponent;
  let fixture: ComponentFixture<UpdateChefcentreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateChefcentreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateChefcentreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
