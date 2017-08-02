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
