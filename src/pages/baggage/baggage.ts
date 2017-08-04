import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BaggagePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-baggage',
  templateUrl: 'baggage.html',
})
export class BaggagePage {
  baggage;
  listbaggage;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ang: AngkasaPuraProvider) {
  }

  ionViewWillEnter(){
   console.log(this.ang.baggage)
      this.listbaggage = this.ang.baggage;
      this.baggage = this.ang.baggage;
  }

}
