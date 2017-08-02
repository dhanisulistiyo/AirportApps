
import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TvPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-tv',
  templateUrl: 'tv.html',
})
export class TvPage {
  tv:Array<any>;
  listtv: Array<any>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ang: AngkasaPuraProvider) {
  }

  ionViewDidEnter(){
    this.ang.getTV().subscribe(data=>{
      this.tv= data;
    });
  }
    

}
