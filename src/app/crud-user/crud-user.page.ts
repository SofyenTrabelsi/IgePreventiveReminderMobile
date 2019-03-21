import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user.service';
import { Utilisateur } from '../Entities/Utilisateur';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.page.html',
  styleUrls: ['./crud-user.page.scss'],
})
export class CrudUserPage implements OnInit {

  public data:  Array<Utilisateur>
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
      this.data=y.filter((item) => {
        return item.key==this.user.getKey()
    });
    })
  }

}
