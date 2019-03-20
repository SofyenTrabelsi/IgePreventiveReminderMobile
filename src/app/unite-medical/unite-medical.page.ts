import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UniteMedicalService } from '../unite-medical.service';
import { UniteMedical } from '../Entities/UniteMedical';

@Component({
  selector: 'app-unite-medical',
  templateUrl: './unite-medical.page.html',
  styleUrls: ['./unite-medical.page.scss'],
})
export class UniteMedicalPage implements OnInit {

  public data:  Array<UniteMedical>
  constructor(
    private router: Router,
    private uniteMedical: UniteMedicalService,
    private afDataBase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    const b = await this.afDataBase.list<UniteMedical>('Unité Medical').valueChanges()
    b.forEach(y => {
      this.data=y
    })
  }
  comosants(i) {
    this.uniteMedical.setUniteMedical({
      uniteMedicalKey:i.key
    })
    this.router.navigate(['/materiel'])
  }
  modifier(i){

  }
  async supprimer(i){
    const b = await this.afDataBase.list('Unité Medical').remove(i.key)
    this.getData()
  }
}
