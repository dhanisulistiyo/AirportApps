import { Component,ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsDetailsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-news-details',
  templateUrl: 'news-details.html',
})
export class NewsDetailsPage {
  news;
  showToolbar: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ref: ChangeDetectorRef) {
    this.news= navParams.data['r']
    console.log(this.news)
  }

  onScroll($event: any) {
    let scrollTop = $event.scrollTop;
    this.showToolbar = scrollTop >= 120;
    this.ref.detectChanges();
  }

}
