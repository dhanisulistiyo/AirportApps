import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FShopPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-f-shop',
  templateUrl: 'f-shop.html',
})
export class FShopPage {
  shop: Array<any> = []
  listshop :Array<any> = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public ang: AngkasaPuraProvider) {
  }

  ionViewWillEnter(){
    console.log(this.ang.shop)
      this.listshop = this.ang.shop;
      this.shop = this.ang.shop;
  }

}
