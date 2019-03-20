import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../user.service';
import { Utilisateur } from '../Entities/Utilisateur';
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
  async verifyPassword() {
    if (this.user.getKey() != null) {
      try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(this.mail, this.paswd)
        this.showAlert("Connexion Réussite", "Vous êtes maintenant connecté!")
        console.log(this.user.getKey()+"    "+this.user.getType())
        if (this.user.getType() == "Admin") {
          this.router.navigate(['/home'])
        }
        else {
          this.router.navigate(['/home1'])
        }
      }
      catch (err) {
        this.toastt(err.message)
      }
    }
    else {
      this.showAlert("Identification échoué", "Vous n'êtes pas un vrai utilisateur!")
    }
  }
  async onGoToHomePage() {
    try {
      const a = await this.afDataBase.list<Utilisateur>('Utilisateurs').valueChanges()
      a.forEach(y => {
        y.forEach(x => {
          if (x.email == this.mail && x.pwd == this.paswd) {
            if(x.type=="Admin"){
              this.user.setUser({
                userKey: x.key,
                userType: x.type,
                uniteMedicalKey:null
              })
            }
            else{
              this.user.setUser({
                userKey: x.key,
                userType: x.type,
                uniteMedicalKey:x.uniteMedical.key
              })
            }
            this.verifyPassword()
          }
        })
      })
    }
    catch (err) {
      this.toastt("sfss")
    }
  }
  onExit() {
  }
}
