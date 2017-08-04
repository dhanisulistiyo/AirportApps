import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FRestoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-f-resto',
  templateUrl: 'f-resto.html',
})
export class FRestoPage {
  resto: Array<any> = []
  listresto :Array<any> = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public ang: AngkasaPuraProvider) {
  }

  ionViewWillEnter(){
    console.log(this.ang.resto)
      this.listresto = this.ang.resto;
      this.resto = this.ang.resto;
  }

}
