/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.page.html',
  styleUrls: ['./facilities.page.scss'],
})
export class FacilitiesPage implements OnInit {
  pages: any = [];
  showHeader: boolean;
  constructor() {
    this.showHeader = false;
    this.pages = [
      { title: "Y O G A", image: "assets/imgs/yoga.jpg" },
      { title: "B O D Y B U L I D I N G", image: "assets/imgs/bb.jpg" },
      { title: "P H Y S I Q U E", image: "assets/imgs/physique.jpg" },
      { title: "F I T N E S S", image: "assets/imgs/fitness.jpg" },
      { title: "Z U M B A", image: "assets/imgs/zumba.jpg" }
    ];
   }
  ionViewWillEnter() {
    this.showHeader = true;
}
  ngOnInit() {
  }

}
