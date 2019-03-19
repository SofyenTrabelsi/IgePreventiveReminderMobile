import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

@Component({
  selector: 'app-materiel',
  templateUrl: './materiel.page.html',
  styleUrls: ['./materiel.page.scss'],
})
export class MaterielPage implements OnInit {
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
    {
      imageUrl: '../../assets/card-saopaolo.png',
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    }, {
      imageUrl: '../../assets/card-saopaolo.png',
      title: '2nd Season',
      place: 'Castelão',
      date: '05/12/2015'
    },
  ];
  constructor( private router: Router) { }

  ngOnInit() {
  }
  addArticle(){
    this.router.navigate(['crud-materiel']);
  }
}
