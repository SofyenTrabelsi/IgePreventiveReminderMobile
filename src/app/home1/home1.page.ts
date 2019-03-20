import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user.service';
import { Composant } from '../Entities/Composant';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  public data: {}
  constructor(
    private router: Router,
    private user: UserService,
    private afDataBase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.getData();
  }
  async getData() {
    const b = await this.afDataBase.list<Composant>('Composants').valueChanges()
    b.forEach(y => {
      this.data = y.filter((item) => {
        return item.uniteMedical.key == this.user.getUMKey()
      });
    })
  }
}
