import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { MaterielService } from '../materiel.service';
import { Composant } from '../Entities/Composant';


@Component({
  selector: 'app-crud-materiel',
  templateUrl: './crud-materiel.page.html',
  styleUrls: ['./crud-materiel.page.scss'],
})
export class CrudMaterielPage implements OnInit {

  public data:  Array<Composant>
  constructor(
    private router: Router,
    private materiel: MaterielService,
    private afDataBase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    const b = await this.afDataBase.list<Composant>('Composants').valueChanges()
    b.forEach(y => {
      this.data=y.filter((item) => {
        return item.key==this.materiel.getKey()
    });
    })
  }

}
