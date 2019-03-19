import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableComponent } from 'ionic-selectable';

import { NavController,AlertController, ModalController } from '@ionic/angular';
@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  items = [
    {
      imageUrl: '../../../assets/card-saopaolo.png',
      title: 'First Cup',
      place: 'Madison Square',
      date: '05/06/2016'
    },
    {
      imageUrl: '../../assets/card-saopaolo.png',
      title: 'Season',
      place: 'Hooli',
      date: '15/03/2016'
    },
    {
      imageUrl: '../../assets/card-saopaolo.png',
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];


  items1 = [
    {
      imageUrl: '../../../assets/card-saopaolo.png',
      title: 'First Cup test test',
      place: 'Madison Square test test ',
      date: '05/06/2016'
    },
    {
      imageUrl: '../../assets/card-saopaolo.png',
      title: 'Season test test',
      place: 'Hooli test test test',
      date: '15/03/2016'
    },
    {
      imageUrl: '../../assets/card-saopaolo.png',
      title: '2nd Season test',
      place: 'Castelão test test',
      date: '05/12/2015'
    },
  ];

   public res: any ;
   public item: any  = [];
  constructor(private router: Router) {
    this.item=this.items;
   }

  ngOnInit() {
  }

  addArticle() {
    this.router.navigate(['crud-user'])
  }

  portChangeD(event: { component: IonicSelectableComponent, value: any }) {
    console.log('port:', event.value.airport);
    this.res=event.value.airport;
      if(this.res ==='')
    {this.item=this.items; }
      else
    {this.item=this.items1;}
}

}
