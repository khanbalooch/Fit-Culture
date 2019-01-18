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

@Component({
  selector: 'app-image',
  templateUrl: './image.page.html',
  styleUrls: ['./image.page.scss'],
})
export class ImagePage implements OnInit {
  pages: any;
  constructor(public modalCrl: ModalController, public route: Router,
              private trainerService: TrainerService) {


    this.pages = [
      { image: "assets/imgs/gallery1.jpg" },
      { image: "assets/imgs/gallery2.jpg" },
      { image: "assets/imgs/gallery3.jpg" },
      { image: "assets/imgs/gallery8.jpg" },
      { image: "assets/imgs/gallery5.jpg" },
      { image: "assets/imgs/gallery6.jpg" },
      { image: "assets/imgs/gallery7.jpg" },
      { image: "assets/imgs/gallery8.jpg" },
      { image: "assets/imgs/gallery1.jpg" },
      { image: "assets/imgs/gallery2.jpg" },
      { image: "assets/imgs/gallery3.jpg" },
      { image: "assets/imgs/gallery8.jpg" },
      { image: "assets/imgs/gallery5.jpg" },
      { image: "assets/imgs/gallery6.jpg" }

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
    this.route.navigate(['modal', page]);
  }
}
