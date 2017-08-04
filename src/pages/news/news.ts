import { NewsDetailsPage } from './../news-details/news-details';
import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NewsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
})
export class NewsPage {
  news: Array<any> = []
  listnews :Array<any> = []
  constructor(public navCtrl: NavController, public navParams: NavParams,public ang:AngkasaPuraProvider) { 
  }
  ionViewWillEnter(){
      console.log(this.ang.news)
      this.listnews = this.ang.news;
      this.news = this.ang.news;
  }

  public listNews(){
    this.news = this.listnews;
  }
  
  detailsNews(r){
    this.navCtrl.push(NewsDetailsPage,{r});
  }

  getItems(searchbar) {
    // Reset items back to all of the items
    this.listNews();
    // set q to the value of the searchbar
    var q = searchbar.target.value;
    // if the value is an empty string don't filter the items
    if (q != undefined) {
      if (q.trim() == '') {
        this.listNews();
        return;
      }
      this.news = this.news.filter((v) => {
      if(v.TITLE_IND!=null){
        if (v.TITLE_IND.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
          }
        }
        return false;
        })
    } else {this.listNews();}
  }



}
