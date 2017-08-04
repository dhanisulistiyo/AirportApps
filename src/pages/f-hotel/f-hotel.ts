import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FHotelPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-f-hotel',
  templateUrl: 'f-hotel.html',
})
export class FHotelPage {
  hotel: Array<any> = []
  listhotel :Array<any> = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public ang: AngkasaPuraProvider) {
  }

ionViewWillEnter(){
    console.log(this.ang.hotel)
      this.listhotel = this.ang.hotel;
      this.hotel = this.ang.hotel;
  }

}
