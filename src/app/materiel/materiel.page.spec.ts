import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterielPage } from './materiel.page';

describe('MaterielPage', () => {
  let component: MaterielPage;
  let fixture: ComponentFixture<MaterielPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaterielPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterielPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
