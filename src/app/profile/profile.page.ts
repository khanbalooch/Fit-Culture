import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss', './profile.page.css'],
})
export class ProfilePage implements OnInit {

  selectedTrainer: any;
  isFav: boolean = false;
  constructor() {

  }
  galleryOpts = {
    effect: 'flip',
    slidesPerView: 'auto',
    spaceBetween: 10
  };

  feedbackOpts = {
    effect: 'flip',
    slidesPerView: 'auto',
    spaceBetween: 10
  };
  ngOnInit() {
  }

  onBookClient() {
  }
}
