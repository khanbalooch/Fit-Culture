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
  selector: 'app-traniee',
  templateUrl: './traniee.page.html',
  styleUrls: ['./traniee.page.scss'],
})
export class TranieePage implements OnInit {
  showHeader: boolean;
  profile: any = [];
  ionViewWillEnter() {
    this.showHeader=true
  }
  constructor() { 
    this.showHeader = false;
    this.profile = [
      { image: "assets/imgs/trainer1.jpg", name: "Name: John Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
      { image: "assets/imgs/trainer2.jpg", name: "Name: John Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
      { image: "assets/imgs/trainer3.jpg", name: "Name: John Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
      { image: "assets/imgs/trainer4.jpg", name: "Name: John Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
    ]
  }

  ngOnInit() {
  }

}
