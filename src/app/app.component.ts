/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */

import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';
import { ApplicationService } from './services/application.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  private selected: string = "Home";

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Trainers',
      url: '/gallery',
      icon: 'aperture'
    },
    {
      title: 'Teams',
      url: '/facilities',
      icon: 'apps'
    },
    {
      title: 'Contact',
      url: '/contact',
      icon: 'call'
    },
    {
      title: 'Offer',
      url: '/offers',
      icon: 'basket'
    },
    {
      title: 'FAQ',
      url: '/faq',
      icon: 'help'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private screenOrientation: ScreenOrientation,
    private route: Router,
    private applicationService: ApplicationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      if (this.platform.is('cordova')) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  openPage(p) {
    this.selected = p.title;
    this.route.navigate([p.url]);
  }
  openLoginPage() {
    this.selected = "login"
    console.log(this.selected);
    this.route.navigate(['login'])
  }
}
