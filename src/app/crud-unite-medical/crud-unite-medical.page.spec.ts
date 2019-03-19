import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudUniteMedicalPage } from './crud-unite-medical.page';

describe('CrudUniteMedicalPage', () => {
  let component: CrudUniteMedicalPage;
  let fixture: ComponentFixture<CrudUniteMedicalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudUniteMedicalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudUniteMedicalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
