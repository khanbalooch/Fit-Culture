import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss', './map.page.css'],
})
export class MapPage implements OnInit {

  protected map: any;
  location = {lat: 50.354527, lng: 72.186742};
  constructor() { }

  ngOnInit() {
  }

  onMapReady(agm) {
    this.map = agm;
    console.log('map is ready');
  }
}
