/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component, OnInit } from '@angular/core';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { App } from '@ionic/angular';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.page.html',
  styleUrls: ['./branches.page.scss'],
})
export class BranchesPage implements OnInit {
  marker:any
  constructor(public launchNavig: LaunchNavigator, public APP:App) {
  this.marker = [
    { Lattitude: 26.9306, Longitude: 75.7936, id: 1, Address: "Maharaha Apartment, Sindhi Colony, Bani Park · 081687 41314" },
    { Lattitude: 26.8538, Longitude: 75.8052, id: 2, Address: "3rd Floor, Gaurav Towers, Malviya Nagar, Jaipur, 0141 400 3535" },
    { Lattitude: 26.9247, Longitude: 75.8180, id: 3, Address: "Galaxy Star, 1st Floor, Central Spine Rd, Sector 2, Central Spine, Vidhyadhar Nagar, Jaipur 098876 02602" }
  ] }

  ngOnInit() {
  }
  clicked({ target: marker }, id) {
    console.log("id" + id)
    marker.nguiMapComponent.openInfoWindow(id, marker);
  }
  launch(Lattitude, Longitude) {
    let options: LaunchNavigatorOptions = {
      start: 'Jaipur, ON',
     }

    this.launchNavig.navigate([Lattitude, Longitude], options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
}
 