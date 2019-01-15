/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';
import { WorkoutModalComponent } from '../workout-modal/workout-modal.component';

@Component({
  selector: 'app-workout',
  templateUrl: './workout.page.html',
  styleUrls: ['./workout.page.scss'],
})
export class WorkoutPage implements OnInit {
  lists: Array<{ Name: string, children: Array<{ Name: string, Equipment: string, Set: string, image: string }> }>;
  shownGroup = null;
  showToolbar: boolean;
  ionViewWillEnter() {
    this.showToolbar = true;
  }
  constructor(public modalController: ModalController) {
    this.showToolbar = false;
    this.lists = [
      {
        Name: "Begineer",
        children: [{
          Name: "DUMBBELL BENCH PRESS",
          Equipment: "Bench, Dumbbells",
          Set: "3",
          image: "assets/imgs/bench-press-dumbell.gif"
        },
        {
          Name: "LAT PULLDOWN",
          Equipment: "Adjustable Cable Machine, Lat Pulldown Bar",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "OVERHEAD DUMBBELL PRESS",
          Equipment: " Dumbbells",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "LEG PRESS",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "LYING LEG CURL",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "ROPE PRESSDOWN",
          Equipment: "Adjustable Cable Machine, Rope Attachment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "BARBELL BICEPS CURL",
          Equipment: " Barbell",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "STANDING CALF RAISE",
          Equipment: "Box",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "CRUNCH",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        }
        ]
      },
      {
        Name: "Modrate",
        children: [{
          Name: "DUMBBELL BENCH PRESS",
          Equipment: "Bench, Dumbbells",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {
          Name: "LAT PULLDOWN",
          Equipment: "Adjustable Cable Machine, Lat Pulldown Bar",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "OVERHEAD DUMBBELL PRESS",
          Equipment: " Dumbbells",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "LEG PRESS",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "LYING LEG CURL",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "ROPE PRESSDOWN",
          Equipment: "Adjustable Cable Machine, Rope Attachment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "BARBELL BICEPS CURL",
          Equipment: " Barbell",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "STANDING CALF RAISE",
          Equipment: "Box",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "CRUNCH",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        }
        ]
      },
      {
        Name: "Professional",
        children: [{
          Name: "DUMBBELL BENCH PRESS",
          Equipment: "Bench, Dumbbells",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {
          Name: "LAT PULLDOWN",
          Equipment: "Adjustable Cable Machine, Lat Pulldown Bar",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "OVERHEAD DUMBBELL PRESS",
          Equipment: " Dumbbells",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "LEG PRESS",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "LYING LEG CURL",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "ROPE PRESSDOWN",
          Equipment: "Adjustable Cable Machine, Rope Attachment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "BARBELL BICEPS CURL",
          Equipment: " Barbell",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "STANDING CALF RAISE",
          Equipment: "Box",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        },
        {

          Name: "CRUNCH",
          Equipment: "No Equipment",
          Set: "3",
          image: "assets/imgs/lat_pulldowns.gif"
        }
        ]
      },
    ]
  }

  ngOnInit() {
    this.toggleGroup(0)
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = true;
    } else {
      this.shownGroup = group;
    }
  };
  isGroupShown(group) {
    return this.shownGroup === group;
  };
  async presentModal() {
    const modal = await this.modalController.create({
      component: WorkoutModalComponent,
      // componentProps: { value: 123 }
    });
    return await modal.present();
  }
}
