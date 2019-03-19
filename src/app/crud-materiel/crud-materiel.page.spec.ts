import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudMaterielPage } from './crud-materiel.page';

describe('CrudMaterielPage', () => {
  let component: CrudMaterielPage;
  let fixture: ComponentFixture<CrudMaterielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudMaterielPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudMaterielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
