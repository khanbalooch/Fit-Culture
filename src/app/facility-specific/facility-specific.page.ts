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
  selector: 'app-facility-specific',
  templateUrl: './facility-specific.page.html',
  styleUrls: ['./facility-specific.page.scss'],
})
export class FacilitySpecificPage implements OnInit {
  showHeader: boolean;
  facility: any = [];
  shownGroup = null;

  ionViewWillEnter() {
    this.showHeader = true
  }
  constructor() {
    this.showHeader = false

  }

  ngOnInit() {
    this.toggleGroup(0)
    this.facility = [
      { title: "Locker Rooms", icon: "lock", image: "../../assets/imgs/locker.jpg" },
      { title: "Individual TV's", icon: "laptop", image: "../../assets/imgs/tv.jpg" },
      { title: "Towel Service", icon: "chatboxes", image: "../../assets/imgs/towel.jpg" },
      { title: "Quality Equipment", icon: "calculator", image: "../../assets/imgs/equipment.jpg" },
      { title: "9,000 SF", icon: "logo-xbox", image: "../../assets/imgs/SF.jpeg" },
      { title: "Free Wifi", icon: "wifi", image: "../../assets/imgs/wifi.jpg" }
    ]
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };

}
