import { TestBed } from '@angular/core/testing';

import { UniteMedicalService } from './unite-medical.service';

describe('UniteMedicalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UniteMedicalService = TestBed.get(UniteMedicalService);
    expect(service).toBeTruthy();
  });
});
