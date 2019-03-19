import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.page.html',
  styleUrls: ['./home1.page.scss'],
})
export class Home1Page implements OnInit {

  constructor(
    private alert: AlertController,
    private afd: AngularFireDatabase
  ) { }

  ngOnInit() {
  }
  async showAlert(header: string, message: any) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }
  addToDateBase() {
    const id=this.afd.list('/shoppingItems/').push({
      name: "sdfhjkl",
      add: "hjkl"
    });
    this.afd.list('/shoppingItems/').update("-LZuJDRD9pYfVybO5qOw",{
      name: "sofyen",
      add: "salah"
    })
    }
}
