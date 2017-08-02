import { TvPage } from './../pages/tv/tv';
import { NewsPage } from './../pages/news/news';
import { BaggagePage } from './../pages/baggage/baggage';
import { MyAccountPage } from './../pages/my-account/my-account';
import { AuthServiceProvider } from './../providers/auth-service/auth-service';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public auth: AuthServiceProvider) {
    this.initializeApp();
    this.pages = [
      { title: 'Jadwal Penerbangan', component: HomePage },
      { title: 'Facilitas', component: HomePage },
      { title: 'Berita', component: NewsPage },
      { title: 'TV Online', component: TvPage },
      { title: 'Bagasi', component: BaggagePage }, 
      { title: 'Profile', component: MyAccountPage },              
      { title: 'Logout', component: this.logout() }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

    public logout() {
       this.auth.logout().subscribe(succ => {       
    });
       return LoginPage;
    }
}
