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
import { NavController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-workout-modal',
  templateUrl: './workout-modal.component.html',
  styleUrls: ['./workout-modal.component.scss']
})
export class WorkoutModalComponent implements OnInit {

  constructor(public activatedRoute: ActivatedRoute, public navCtrl: NavController, public modalCtrl:ModalController ) { }

  ngOnInit() {
  }
  closeModal() {
    console.log('ghjgjgjhghjghjghjghvgjhvhjghjhjgvhjhkjhkjhkjhkhhkjhjkhjhj')
    this.modalCtrl.dismiss();
   }
}
