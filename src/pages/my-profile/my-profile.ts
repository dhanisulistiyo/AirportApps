import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyProfilePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-my-profile',
  templateUrl: 'my-profile.html',
})
export class MyProfilePage {
  user
  constructor(public navCtrl: NavController, public navParams: NavParams, public aut: AuthServiceProvider) {
  }

  ionViewDidEnter(){
      this.user = this.aut.currentUser;
  }

}
