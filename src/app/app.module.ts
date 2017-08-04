import { MyFlightPage } from './../pages/my-flight/my-flight';
import { FShopPage } from './../pages/f-shop/f-shop';
import { FRestoPage } from './../pages/f-resto/f-resto';
import { FNumImportantPage } from './../pages/f-num-important/f-num-important';
import { FHotelPage } from './../pages/f-hotel/f-hotel';
import { FFacilitasPage } from './../pages/f-facilitas/f-facilitas';
import { FacilityMenuPage } from './../pages/facility-menu/facility-menu';
import { TabsMenuPage } from './../pages/tabs-menu/tabs-menu';
import { NewsDetailsPage } from './../pages/news-details/news-details';
import { TvPage } from './../pages/tv/tv';
import { NewsPage } from './../pages/news/news';
import { MyProfileCpPage } from './../pages/my-profile-cp/my-profile-cp';
import { MyProfilePage } from './../pages/my-profile/my-profile';
import { MyAccountPage } from './../pages/my-account/my-account';
import { BaggagePage } from './../pages/baggage/baggage';


import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AngkasaPuraProvider } from '../providers/angkasa-pura/angkasa-pura';


@NgModule({
  declarations: [
    MyApp,
    BaggagePage,
    HomePage,
    ListPage,
    LoginPage,
    MyAccountPage,
    MyProfilePage,
    MyProfileCpPage,
    NewsPage,
    RegisterPage,
    TvPage,
    NewsDetailsPage,
    TabsMenuPage,
    FacilityMenuPage,
    FFacilitasPage,
    FHotelPage,
    FNumImportantPage,
    FRestoPage,
    FShopPage,
    MyFlightPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BaggagePage,
    HomePage,
    ListPage,
    LoginPage,
    MyAccountPage,
    MyProfilePage,
    MyProfileCpPage,
    NewsPage,
    RegisterPage,
    TvPage,
    NewsDetailsPage,
    TabsMenuPage,
    FacilityMenuPage,
    FFacilitasPage,
    FHotelPage,
    FNumImportantPage,
    FRestoPage,
    FShopPage,
    MyFlightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    AngkasaPuraProvider
  ]
})
export class AppModule {}
