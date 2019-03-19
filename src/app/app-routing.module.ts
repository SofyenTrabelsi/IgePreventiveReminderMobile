import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home1', pathMatch: 'full' },
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'home1', loadChildren: './home1/home1.module#Home1PageModule' },
  { path: 'crud-user', loadChildren: './crud-user/crud-user.module#CrudUserPageModule' },
  { path: 'crud-unite-medical', loadChildren: './crud-unite-medical/crud-unite-medical.module#CrudUniteMedicalPageModule' },
  { path: 'crud-materiel', loadChildren: './crud-materiel/crud-materiel.module#CrudMaterielPageModule' },
  { path: 'unite-medical', loadChildren: './unite-medical/unite-medical.module#UniteMedicalPageModule' },
  { path: 'materiel', loadChildren: './materiel/materiel.module#MaterielPageModule' },
  { path: 'users', loadChildren: './users/users.module#UsersPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
