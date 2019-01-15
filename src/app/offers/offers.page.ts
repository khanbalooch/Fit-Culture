/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
  import { from } from 'rxjs';
 @Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  pages: any = [];
  constructor(public route:Router) {
    this.pages = [
      { image: "assets/imgs/offer1.jpg", title: "Get 3 months Free", TnC: "1. Members must be 16 or older \n 2. You agree to comply with the Rules of Membership which are displayed prominently in the Club and relate to opening hours, use of facilities and your conduct. We may make reasonable changes to these Rules at any time provided that we give you advance notice of the change.\n 3. If we take no action or let you off any breach of this agreement or give you extra time to pay or comply, it will not stop us enforcing the terms of this agreement strictly at a future date.\n 4. We may assign the benefit of this agreement and our rights thereunder to a third party on notice to you. Your rights under this agreement will not be prejudiced." },
      { image: "assets/imgs/offer2.jpg", title: "Student Discount", TnC: "1. Members must be 16 or older. \n 2. You agree to comply with the Rules of Membership which are displayed prominently in the Club and relate to opening hours, use of facilities and your conduct. We may make reasonable changes to these Rules at any time provided that we give you advance notice of the change.\n 3. If we take no action or let you off any breach of this agreement or give you extra time to pay or comply, it will not stop us enforcing the terms of this agreement strictly at a future date.\n 4. We may assign the benefit of this agreement and our rights thereunder to a third party on notice to you. Your rights under this agreement will not be prejudiced." },
      { image: "assets/imgs/offer1.jpg", title: "Get 3 months Free", TnC: "1. Members must be 16 or older \n2. You agree to comply with the Rules of Membership which are displayed prominently in the Club and relate to opening hours, use of facilities and your conduct. We may make reasonable changes to these Rules at any time provided that we give you advance notice of the change.\n 3. If we take no action or let you off any breach of this agreement or give you extra time to pay or comply, it will not stop us enforcing the terms of this agreement strictly at a future date.\n 4. We may assign the benefit of this agreement and our rights thereunder to a third party on notice to you. Your rights under this agreement will not be prejudiced." },
      { image: "assets/imgs/offer2.jpg", title: "Student Discount", TnC: "1. Members must be 16 or older.  \n2. You agree to comply with the Rules of Membership which are displayed prominently in the Club and relate to opening hours, use of facilities and your conduct. We may make reasonable changes to these Rules at any time provided that we give you advance notice of the change.\n 3. If we take no action or let you off any breach of this agreement or give you extra time to pay or comply, it will not stop us enforcing the terms of this agreement strictly at a future date.\n 4. We may assign the benefit of this agreement and our rights thereunder to a third party on notice to you. Your rights under this agreement will not be prejudiced." },
      { image: "assets/imgs/offer1.jpg", title: "Get 3 months Free", TnC: "1. Members must be 16 or older\n 2. You agree to comply with the Rules of Membership which are displayed prominently in the Club and relate to opening hours, use of facilities and your conduct. We may make reasonable changes to these Rules at any time provided that we give you advance notice of the change.\n 3. If we take no action or let you off any breach of this agreement or give you extra time to pay or comply, it will not stop us enforcing the terms of this agreement strictly at a future date.\n 4. We may assign the benefit of this agreement and our rights thereunder to a third party on notice to you. Your rights under this agreement will not be prejudiced." },
      { image: "assets/imgs/offer2.jpg", title: "Student Discount", TnC: "1. Members must be 16 or older.  \n2. You agree to comply with the Rules of Membership which are displayed prominently in the Club and relate to opening hours, use of facilities and your conduct. We may make reasonable changes to these Rules at any time provided that we give you advance notice of the change.\n 3. If we take no action or let you off any breach of this agreement or give you extra time to pay or comply, it will not stop us enforcing the terms of this agreement strictly at a future date.\n 4. We may assign the benefit of this agreement and our rights thereunder to a third party on notice to you. Your rights under this agreement will not be prejudiced." },
    ];
   }

  ngOnInit() {
  }
  presentModal(page) {
    console.log('page', page)
    this.route.navigate(['offer-model', page ]);
  }
}
