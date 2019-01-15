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
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {
  imageData: any =[];
  constructor(public activatedRoute: ActivatedRoute, public navCtrl: NavController) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      console.log("params", params);
       this.imageData = params
      console.log("imageData", this.imageData);
  })
  }
  closeModal() {
    this.navCtrl.navigateBack('/gallery');
  }
}
