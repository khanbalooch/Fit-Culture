/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';
import { AlertController } from '@ionic/angular';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: Facebook, private googlePlus: GooglePlus, private alterCtrl: AlertController,
    private applicationService: ApplicationService, private route: Router) { }

  ngOnInit() {
  }

  loginWithFB() {
    this.fb.login(['public_profile', 'user_friends', 'email']).then((res: FacebookLoginResponse) => {
      console.log('Logged into Facebook!', res);
      if (res.status === 'connected') {
        this.handleSocialLoginSuccess(res);
      }
    })
      .catch(e => {
        console.log('Error logging into Facebook', e);
        this.handleSocialLoginError(e);
      });
  }


  async  handleSocialLoginSuccess(res) {
    this.applicationService.isLogin = true;
    const alert = await this.alterCtrl.create({
      buttons: ['Ok'],
      message: 'Successfully logined'
    });
    await alert.present();
    alert.onDidDismiss().then(() => {
      this.route.navigate(['/home'])
    });

  }


  async handleSocialLoginError(err) {
    const alert = await this.alterCtrl.create({
      buttons: ['Ok'],
      message: 'Error while login. Please try again later.'
    });
    await alert.present();
  }

  loginWithGPlus() {
    this.googlePlus.login({})
      .then(res => {
        this.handleSocialLoginSuccess(res);
      }).catch(err => { this.handleSocialLoginError(err); });
  }

}
