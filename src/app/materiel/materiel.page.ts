import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UniteMedicalService } from '../unite-medical.service';
import { MaterielService } from '../materiel.service';
import { Composant } from '../Entities/Composant';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.page.html',
  styleUrls: ['./materiel.page.scss'],
})
export class MaterielPage implements OnInit {

  public data: {}
  constructor(
    private router: Router,
    private materiel: MaterielService,
    private uniteMedical: UniteMedicalService,
    private afDataBase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    const b = await this.afDataBase.list<Composant>('Composants').valueChanges()
    b.forEach(y => {
      this.data = y.filter((item) => {
        return item.uniteMedical.key == this.uniteMedical.getKey()
      });
    })
  }
  modifier(i) {
    this.materiel.setMateriel({
      materielKey: i.key,
      uniteMedicalKey: null
    })
    this.router.navigate(['/crud-materiel'])
  }
  async supprimer(i) {
    const b = await this.afDataBase.list('Composants').remove(i.key)
    this.getData()
  }
}
