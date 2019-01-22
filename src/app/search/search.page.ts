import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  showSearch: boolean;

  constructor() {
  }

  showHideSearch(val: boolean) {
    this.showSearch = val;
  }

  ngOnInit() {
  }

}
