import { Injectable } from '@angular/core';

interface uniteMedical{
  key?:string;
  title:string;
  type:string;
  nom:string;
  gouv:string;
  ville:string;
  codePostal:string;
}

@Injectable({
  providedIn: 'root'
})
export class UniteMedicalService {
  public uniteMedical:uniteMedical
  constructor() { }
  setUniteMedical(uniteMedical:uniteMedical){
    this.uniteMedical=uniteMedical
  }
  getKey(){
    this.uniteMedical.key;
  }
}
