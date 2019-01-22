/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacilityTypePage } from './facility-type/facility-type.page'
import { GalleryPage } from './gallery/gallery.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'branches', loadChildren: './branches/branches.module#BranchesPageModule' },
  { path: 'contact', loadChildren: './contact/contact.module#ContactPageModule' },
  { path: 'facilities', loadChildren: './facilities/facilities.module#FacilitiesPageModule' },
  { path: 'facility-specific', loadChildren: './facility-specific/facility-specific.module#FacilitySpecificPageModule' },
  {
    path: 'facility-type',
    component: FacilityTypePage,
    children: [
      {
        path: 'workout',
        outlet: 'workout',
        loadChildren: './workout/workout.module#WorkoutPageModule'
      },
      {
        path: 'traniee',
        outlet: 'traniee',
        loadChildren: './traniee/traniee.module#TranieePageModule'
      },
      {
        path: 'facility-specific',
        outlet: 'facility-specific',
        loadChildren: './facility-specific/facility-specific.module#FacilitySpecificPageModule'
      },
      {
        path: '',
        redirectTo: '/facility-type/(workout:workout)',
        pathMatch: 'full'
      }
    ]
  },
  { path: 'faq', loadChildren: './faq/faq.module#FaqPageModule' },
  { path: 'faq-model', loadChildren: './faq-model/faq-model.module#FaqModelPageModule' },
  {
    path: 'gallery',
    component: GalleryPage,
    children: [
      {
        path: 'image',
        outlet: 'image',
        loadChildren: './image/image.module#ImagePageModule'
      },
      {
        path: 'video',
        outlet: 'video',
        loadChildren: './video/video.module#VideoPageModule'
      },
      {
        path: '',
        redirectTo: '/gallery/(image:image)',
        pathMatch: 'full'
      }
    ]
  },
    // loadChildren: './gallery/gallery.module#GalleryPageModule'
  { path: 'image', loadChildren: './image/image.module#ImagePageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'modal', loadChildren: './modal/modal.module#ModalPageModule' },
  { path: 'offer-model', loadChildren: './offer-model/offer-model.module#OfferModelPageModule' },
  { path: 'offers', loadChildren: './offers/offers.module#OffersPageModule' },
  { path: 'traniee', loadChildren: './traniee/traniee.module#TranieePageModule' },
  { path: 'video', loadChildren: './video/video.module#VideoPageModule' },
  { path: 'video-model', loadChildren: './video-model/video-model.module#VideoModelPageModule' },
  { path: 'workout', loadChildren: './workout/workout.module#WorkoutPageModule' },  { path: 'profile', loadChildren: './profile/profile.module#ProfilePageModule' },
  { path: 'map', loadChildren: './map/map.module#MapPageModule' },
  { path: 'messages', loadChildren: './messages/messages.module#MessagesPageModule' },
  { path: 'bookings', loadChildren: './bookings/bookings.module#BookingsPageModule' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
