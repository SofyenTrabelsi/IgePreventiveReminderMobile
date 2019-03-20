import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user.service';
import { UniteMedical } from '../Entities/UniteMedical';

@Component({
  selector: 'app-unite-medical',
  templateUrl: './unite-medical.page.html',
  styleUrls: ['./unite-medical.page.scss'],
})
export class UniteMedicalPage implements OnInit {

  public data:UniteMedical[]
  constructor(
    private router: Router,
    private user: UserService,
    private afDataBase:AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getData();
  }
  getData(){
    const b=this.afDataBase.list<UniteMedical>('Unité Medical').valueChanges()
            b.forEach(y=>{
              this.data=y
            })
  }

}
