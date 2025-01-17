import { ComponentFixture, TestBed } from '@angular/core/testing';
import '@types/jest';

import { TypeTableComponent } from './type-table.component';

describe('TypeTableComponent', () => {
  let component: TypeTableComponent;
  let fixture: ComponentFixture<TypeTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
