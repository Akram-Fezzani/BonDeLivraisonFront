import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDemandevetoComponent } from './add-demandeveto.component';

describe('AddDemandevetoComponent', () => {
  let component: AddDemandevetoComponent;
  let fixture: ComponentFixture<AddDemandevetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDemandevetoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDemandevetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
