/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { TrainerService } from '../../app/services/trainer.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss', './image.page.css'],
})
export class ImagePage implements OnInit {

  trainers: any;
  error: any;
  show: boolean = false;
  isShowSearchBar: boolean = false;
  isShowFilter: boolean = true;


  constructor(public router: Router,
              private trainerService: TrainerService,
              private loadingController: LoadingController) {}


  async ngOnInit() {
    try {
      const loading = await this.presentLoading();
      this.trainers = await this.trainerService.getByType('TRAINER');
      console.log(this.trainers);
      this.loadingController.dismiss();
    } catch (error) {
      console.log(error);
      this.loadingController.dismiss();
    }
  }

  isValidPic(url: any) {
    return (/\.(gif|jpg|jpeg|tiff|png)$/i).test(url);
  }

  async presentLoading() {
    console.log('starting loading');
     const loading = await this.loadingController.create({
      spinner: 'circles',
      keyboardClose: true,
      message: 'Loading Trainers'
    });
    return await loading.present();
  }

  onTrainerSelect(trainer: any) {
    console.log(trainer);
    this.router.navigateByUrl('/trainer-profile');
  }

}
