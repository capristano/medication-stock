import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationStorageFormComponent } from './medication-storage-form.component';

describe('MedicationStorageFormComponent', () => {
  let component: MedicationStorageFormComponent;
  let fixture: ComponentFixture<MedicationStorageFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicationStorageFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicationStorageFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
