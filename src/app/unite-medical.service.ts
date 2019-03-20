import { Injectable } from '@angular/core';

interface uniteMedical{
  uniteMedicalKey:string
}

@Injectable({
  providedIn: 'root'
})
export class UniteMedicalService {

  private uniteMedical:uniteMedical
  constructor() { }

  setUniteMedical(uniteMedical:uniteMedical){
    this.uniteMedical=uniteMedical
  }
  getKey(){
    return this.uniteMedical.uniteMedicalKey
  }
}
