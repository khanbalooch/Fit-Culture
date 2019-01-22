/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { TrainerService } from '../services/trainer.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-video',
  templateUrl: './video.page.html',
  styleUrls: ['./video.page.scss', './video.page.css'],
})
export class VideoPage implements OnInit {

  trainers: any;
  error: any;
  show: boolean = false;
  isShowSearchBar: boolean = false;
  isShowFilter: boolean = true;


  constructor(public route: Router,
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



/*  pages: any;
  constructor(public route: Router, private trainerService: TrainerService) {



    this.pages = [
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery1.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery2.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery3.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery8.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery5.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery6.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery7.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery8.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery1.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery2.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery3.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery8.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery5.jpg" },
      { video: "assets/imgs/video.mp4", image: "assets/imgs/gallery6.jpg" }
    ]


  }

  async ngOnInit() {
    try {
      const trainers = await this.trainerService.getAll();
      console.log(trainers);
    } catch (error) {
      console.log(error);
    }
  }
  presentModal(page) {
    console.log('page', page)
    this.route.navigate(['video-model', page]);
  }*/
}
