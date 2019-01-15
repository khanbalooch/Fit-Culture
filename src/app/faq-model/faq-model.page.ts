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
  selector: 'app-faq-model',
  templateUrl: './faq-model.page.html',
  styleUrls: ['./faq-model.page.scss'],
})
export class FaqModelPage implements OnInit {
  inData: any;
  constructor(public activeRoute:ActivatedRoute) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(params => {
    console.log(params,"params at faq-modal")
      this.inData = params
  })
  }

}
