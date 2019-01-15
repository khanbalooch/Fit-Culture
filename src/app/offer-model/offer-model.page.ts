/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-offer-model',
  templateUrl: './offer-model.page.html',
  styleUrls: ['./offer-model.page.scss'],
})
export class OfferModelPage implements OnInit {
  itemDetails: any = [];
  constructor(public activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
      console.log('params', params);
      this.itemDetails = params
    });
    console.log('itemDetails', this.itemDetails)
  }
}
