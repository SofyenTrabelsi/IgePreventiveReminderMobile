import { Injectable } from '@angular/core';

interface materiel{
  materielKey:string
  uniteMedicalKey:string
}

@Injectable({
  providedIn: 'root'
})
export class MaterielService {

  private materiel:materiel
  constructor() { }

  setMateriel(materiel:materiel){
    this.materiel=materiel
  }
  getKey(){
    return this.materiel.materielKey
  }
  getUMKey(){
    return this.materiel.uniteMedicalKey
  }
}
