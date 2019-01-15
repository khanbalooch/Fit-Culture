import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FacilitySpecificPage } from './facility-specific.page';

const routes: Routes = [
  {
    path: '',
    component: FacilitySpecificPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FacilitySpecificPage]
})
export class FacilitySpecificPageModule {}
