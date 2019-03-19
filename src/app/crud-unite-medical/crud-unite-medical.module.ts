import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CrudUniteMedicalPage } from './crud-unite-medical.page';

const routes: Routes = [
  {
    path: '',
    component: CrudUniteMedicalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CrudUniteMedicalPage]
})
export class CrudUniteMedicalPageModule {}
