import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
  public mail: string;
  public paswd: string;
  constructor(
    private user: UserService,
    private afAuth: AngularFireAuth,
    private afDataBase: AngularFireDatabase,
    private toastController: ToastController,
    private alert: AlertController,
    private router: Router,
  ) { }

  ngOnInit() {
  }
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
  async onGoToHomePage() {
    try {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(this.mail, this.paswd)
      this.user.setArticle({
        userUid: res.user.uid
      })
      // const e_mail=this.mail
      // const mot_de_passe=this.paswd
      // this.afStore.doc(`users/${res.user.uid}`).set({
      //   e_mail,
      //   mot_de_passe
      // })
      this.showAlert("Connexion Réussite","Vous êtes maintenant connecté!")
      this.router.navigate(['/home'])
    }
    catch (err) {
      this.toastt(err.message)
    }
  }
  onExit() {
  }
}
