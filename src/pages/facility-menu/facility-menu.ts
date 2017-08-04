import { FShopPage } from './../f-shop/f-shop';
import { FRestoPage } from './../f-resto/f-resto';
import { FNumImportantPage } from './../f-num-important/f-num-important';
import { FHotelPage } from './../f-hotel/f-hotel';
import { FFacilitasPage } from './../f-facilitas/f-facilitas';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FacilityMenuPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-facility-menu',
  templateUrl: 'facility-menu.html',
})
export class FacilityMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  tofacility(){
    this.navCtrl.push(FFacilitasPage)
  }

  tohotel(){
    this.navCtrl.push(FHotelPage)
  }
  tonumimportant(){
    this.navCtrl.push(FNumImportantPage)
  }
  toresto(){
    this.navCtrl.push(FRestoPage)
  }
    toshop(){
    this.navCtrl.push(FShopPage)
  }
}
