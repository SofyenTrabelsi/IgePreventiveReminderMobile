import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UniteMedicalService } from '../unite-medical.service';
import { UniteMedical } from '../Entities/UniteMedical';


@Component({
  selector: 'app-crud-unite-medical',
  templateUrl: './crud-unite-medical.page.html',
  styleUrls: ['./crud-unite-medical.page.scss'],
})
export class CrudUniteMedicalPage implements OnInit {

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
      this.data=y.filter((item) => {
        return item.key==this.uniteMedical.getKey()
    });
    })
  }

}
