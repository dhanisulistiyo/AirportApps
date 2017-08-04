import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FFacilitasPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-f-facilitas',
  templateUrl: 'f-facilitas.html',
})
export class FFacilitasPage {
  facility: Array<any> = []
  listfacility :Array<any> = []
  constructor(public navCtrl: NavController, public navParams: NavParams, public ang: AngkasaPuraProvider) {
  }

 ionViewWillEnter(){
   console.log(this.ang.facility)
      this.listfacility = this.ang.facility;
      this.facility = this.ang.facility;
  }

}
