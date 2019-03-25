import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { UserService } from '../user.service';
import { Utilisateur } from '../Entities/Utilisateur';
import { UniteMedical } from '../Entities/UniteMedical';

@Component({
  selector: 'app-crud-user',
  templateUrl: './crud-user.page.html',
  styleUrls: ['./crud-user.page.scss'],
})
export class CrudUserPage implements OnInit {

  public data:  Array<Utilisateur>
  public type: string
  public email: string
  public pwd: string
  public poste: string
  public uniteMedical:UniteMedical
  public title:string
  constructor(
    private router: Router,
    private toastController: ToastController,
    private alert: AlertController,
    private user: UserService,
    private afDataBase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.title="Ajout d'utilisateur"
    // if (this.uniteMedical != null) {
    //   this.getData();
    // }
  }
  // async getData() {
  //   const b = await this.afDataBase.list<Utilisateur>('Utilisateurs').valueChanges()
  //   b.forEach(y => {
  //     this.data=y.filter((item) => {
  //       return item.key==this.user.getKey()
  //   });
  //   })
  // }
  async toastt(msg: string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  async showAlert(header: string, message: string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["OK"]
    })
    await alert.present()
  }
  async ajouter() {
    if(this.type=="Admin"){
      const key = this.afDataBase.list('Utilisateurs').push({
        email:this.email,
        pwd: this.pwd,
        title: "Utilisateurs",
        poste: this.poste,
        type: this.type
      });
      this.afDataBase.list('Utilisateurs').update(key.key, {
        key: key.key
      })
    }
  }
}
