
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
      { image: "../../assets/imgs/slide1.jpg", name: "Name: Andy Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
      { image: "../../assets/imgs/slide2.jpg", name: "Name: Bill Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
      { image: "../../assets/imgs/slide3.jpg", name: "Name: Chris Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
      { image: "../../assets/imgs/slide4.jpg", name: "Name: david Alexander", post: "Post: Point Guard", des: "Specializes in Class Program Coaching and Service with Style" },
    ]
  }

  ngOnInit() {
  }

}
