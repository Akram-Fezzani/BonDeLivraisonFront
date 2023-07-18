import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChauffeurTableComponent } from './chauffeur-table.component';

describe('ChauffeurTableComponent', () => {
  let component: ChauffeurTableComponent;
  let fixture: ComponentFixture<ChauffeurTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChauffeurTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChauffeurTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
