import { AngkasaPuraProvider } from './../../providers/angkasa-pura/angkasa-pura';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public ang:AngkasaPuraProvider) {

  }

  getSchedul(){
      this.ang.getSchedule().subscribe(data =>{
          console.log(data)
      })
        

  }

}
