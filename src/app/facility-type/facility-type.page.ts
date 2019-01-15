/**
 * Fit Culture (https://www.ennapd.com/fitculture)
 *
 * Copyright © 2018-present Enappd. All rights reserved.
 *
 * This source code is licensed as per the terms found in the
 * LICENSE.md file in the root directory of this source tree.
 */
import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-facility-type',
  templateUrl: './facility-type.page.html',
  styleUrls: ['./facility-type.page.scss'],
})
export class FacilityTypePage implements OnInit{
  headerName: any = "workout";
  constructor(private route: Router) { }
  ngOnInit() {
  }

  changeTab(e) { 
     console.log('value', e.detail.tab.tab)
    this.headerName = e.detail.tab.tab
  }
}
