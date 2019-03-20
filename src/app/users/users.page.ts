import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user.service';
import { Utilisateur } from '../Entities/Utilisateur';
import { UniteMedical } from '../Entities/UniteMedical';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  public data: Utilisateur[]
  constructor(
    private router: Router,
    private user: UserService,
    private afDataBase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    const b = await this.afDataBase.list<Utilisateur>('Utilisateurs').valueChanges()
    b.forEach(y => {
      this.data = y
    })
  }

}
