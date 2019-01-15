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
import { Router } from '@angular/router';
import { BranchesPage } from '../branches/branches.page';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  Timing: any;
  constructor(public launchNavigator: LaunchNavigator, public APPS: App, public route: Router) {
    this.Timing = [
      { Day: "Monday :", Time: "5AM to 9PM" },
      { Day: "Tuesday :", Time: "5AM to 9PM" },
      { Day: "Wednesday:", Time: "5AM to 9PM" },
      { Day: "Thursday :", Time: "5AM to 9PM" },
      { Day: "Friday :", Time: "5AM to 9PM" },
      { Day: "Saturday :", Time: "5AM to 6PM" },
      { Day: "Sunday :", Time: "5AM to 6PM" },

    ]
  }

  ngOnInit() {
  }
  clicked({ target: marker }) {

    marker.nguiMapComponent.openInfoWindow('wr', marker);

  }
  openMapPage() {
    this.route.navigate(['branches'])
  }
  launch() {
    let options: LaunchNavigatorOptions = {
      start: 'Jaipur, ON',
      app: this.launchNavigator.APP.GOOGLE_MAPS//LaunchNavigator.APP.GOOGLE_MAPS
    }

    this.launchNavigator.navigate('[26.9306, 75.7936], ON', options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );
  }
}
