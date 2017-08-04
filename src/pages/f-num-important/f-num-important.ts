import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FNumImportantPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-f-num-important',
  templateUrl: 'f-num-important.html',
})
export class FNumImportantPage {
  num: Array<any> = []
  listnum :Array<any> = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public ang:AngkasaPuraProvider) {
  }

ionViewWillEnter(){
  console.log(this.ang.importanum)
      this.listnum = this.ang.importanum;
      this.num = this.ang.importanum;
  }

}
