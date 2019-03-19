import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicSelectableModule } from 'ionic-selectable';

import { IonicModule } from '@ionic/angular';

import { UniteMedicalPage } from './unite-medical.page';

const routes: Routes = [
  {
    path: '',
    component: UniteMedicalPage
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
  declarations: [UniteMedicalPage]
})
export class UniteMedicalPageModule {}
