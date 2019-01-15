import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NguiMapModule } from '@ngui/map';

import { IonicModule } from '@ionic/angular';

import { BranchesPage } from './branches.page';

const routes: Routes = [
  {
    path: '',
    component: BranchesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDAxopl1Aak_YJJ56_pfVfbnVPYlwul7YE' }),
    RouterModule.forChild(routes)
  ],
  declarations: [BranchesPage]
})
export class BranchesPageModule {}
