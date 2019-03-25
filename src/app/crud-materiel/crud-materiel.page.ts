import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { MaterielService } from '../materiel.service';
import { Composant } from '../Entities/Composant';
import { UniteMedical } from '../Entities/UniteMedical';


@Component({
  selector: 'app-crud-materiel',
  templateUrl: './crud-materiel.page.html',
  styleUrls: ['./crud-materiel.page.scss'],
})
export class CrudMaterielPage implements OnInit {

  public data: Array<Composant>
  public type: string
  public nom: string
  public reference: string
  public dateMaintenance: string
  public uniteMedical:UniteMedical
  public title:string
  constructor(
    private router: Router,
    private toastController: ToastController,
    private alert: AlertController,
    private materiel: MaterielService,
    private afDataBase: AngularFireDatabase,
  ) { }

  ngOnInit() {
    this.title = "Ajout de matériel"
    // if (this.uniteMedical != null) {
    //   this.getData();
    // }
  }
  // async getData() {
  //   const b = await this.afDataBase.list<Composant>('Composants').valueChanges()
  //   b.forEach(y => {
  //     this.data = y.filter((item) => {
  //       return item.key == this.materiel.getKey()
  //     });
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
    const key = this.afDataBase.list('Composants').push({
      type: this.type,
      nom: this.nom,
      title: "Composants",
      reference: this.reference,
      dateMaintenance: this.dateMaintenance
    });
    this.afDataBase.list('Composants').update(key.key, {
      key: key.key
    })
  }
}
