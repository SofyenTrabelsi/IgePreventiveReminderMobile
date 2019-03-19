import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public userUid:string;
  constructor(
    private router: Router,
    private user:UserService
  ) { }

  ngOnInit() {
    this.userUid=this.user.getUID()
  }
  onGoToHomePage(){
  }
  onLogOut(){
    this.router.navigate(['/accueil'])
  }



  cardTapped(card) {
    this.router.navigate(['/users'])
  }

  cardTapped1(card) {
    this.router.navigate(['/unite-medical'])
  }
}
