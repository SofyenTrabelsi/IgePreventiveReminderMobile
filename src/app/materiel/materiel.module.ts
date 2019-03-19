import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MaterielPage } from './materiel.page';
import { IonicSelectableModule } from 'ionic-selectable';
const routes: Routes = [
  {
    path: '',
    component: MaterielPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicSelectableModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MaterielPage]
})
export class MaterielPageModule {}
