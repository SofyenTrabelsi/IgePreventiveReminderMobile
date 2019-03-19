import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniteMedicalPage } from './unite-medical.page';

describe('UniteMedicalPage', () => {
  let component: UniteMedicalPage;
  let fixture: ComponentFixture<UniteMedicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniteMedicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniteMedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
