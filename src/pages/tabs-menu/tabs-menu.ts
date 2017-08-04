import { TvPage } from './../tv/tv';
import { NewsPage } from './../news/news';
import { BaggagePage } from './../baggage/baggage';
import { MyAccountPage } from './../my-account/my-account';
import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TabsMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs-menu',
  templateUrl: 'tabs-menu.html',
})
export class TabsMenuPage {

    tab1Root: any = HomePage
    tab2Root: any = "Belum Ada";
    tab3Root: any = NewsPage
    tab4Root: any = TvPage
    tab5Root: any = BaggagePage
    tab6Root: any = MyAccountPage

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsMenuPage');
  }

}
