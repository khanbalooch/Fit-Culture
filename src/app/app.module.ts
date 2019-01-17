

import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/ngx';
import { NguiMapModule } from '@ngui/map';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { from } from 'rxjs';
import { WorkoutModalComponent } from './workout-modal/workout-modal.component';
import { FacilityTypePageModule } from './facility-type/facility-type.module';
import { GalleryPageModule } from './gallery/gallery.module';
@NgModule({
  declarations: [AppComponent, WorkoutModalComponent],
  entryComponents: [WorkoutModalComponent],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    NguiMapModule.forRoot({ apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyDAxopl1Aak_YJJ56_pfVfbnVPYlwul7YE' }),
    AppRoutingModule,
    FacilityTypePageModule,
    GalleryPageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ScreenOrientation,
    LaunchNavigator,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
