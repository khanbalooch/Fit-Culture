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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-video-model',
  templateUrl: './video-model.page.html',
  styleUrls: ['./video-model.page.scss'],
})
export class VideoModelPage implements OnInit {
  getData: any;
  constructor(public activatedRoute:ActivatedRoute, public navCtrl:NavController) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log("data at videomodal",params)
      this.getData= params
    })
  }
  closeModal() {
    this.navCtrl.navigateBack('/gallery/(video:video)');
  }

}
