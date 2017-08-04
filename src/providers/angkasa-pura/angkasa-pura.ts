import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the AngkasaPuraProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class AngkasaPuraProvider {
  baseUrl;
  tv;
  news;
  schedule;
  resto;
  facility;
  hotel;
  importanum;
  shop;
  baggage;
  constructor(public http: Http,public load : LoadingController) {
    console.log('Hello AngkasaPuraProvider Provider');
    this.baseUrl = "http://newdau.angkasapura2.co.id/cp-mobile";
  }

autoload(){
    console.log("loader data");
    let loader = this.load.create({
            content: 'Please wait...'
        });
        loader.present();
        //ok
       this.getNews().subscribe(data=>{
         console.log("News:"+data);
          this.news=data;    
       });
        //ok
        this.getTV().subscribe(data=>{
         console.log("TV:"+data); 
          this.tv=data;    
       });//ok
       this.getSchedule().subscribe(data=>{
         console.log("Jadwal:"+data); 
          this.schedule=data;
       })//ok
       this.getResto().subscribe(data=>{
         console.log("Resto:"+data); 
          this.resto=data;
       })//ok
        this.getFacility().subscribe(data=>{
         console.log("Facility:"+data); 
          this.facility=data;
       })//ok
        this.getHotel().subscribe(data=>{
         console.log("Hotel:"+data); 
          this.hotel=data;
       })//ok
        this.getImportanNum().subscribe(data=>{
         console.log("ImportNum:"+data); 
          this.importanum=data;
       })//ok
       this.getShop().subscribe(data=>{
         console.log("Shop:"+data); 
          this.shop=data;
       })
      // this.getBaggage().subscribe(data=>{
      //    console.log("Baggage:"+data.object_name); 
      //     this.baggage=data.object_name;
      //  })
      loader.dismiss();   

}  


//schedule
getSchedule() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&api=FIDS&submit=Submit"
    var headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/flight/get_flight';
    var response = this.http.post(url, obj, { headers: headers }).map(res => res.json());
    return response;
  }

 
  //makanan
getResto() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&data_type=IA_DINE&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/facility/get_facility';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
}
   //facility 
  getFacility() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&data_type=IA_FACILITY&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded'});
    var url = this.baseUrl+'/facility/get_facility';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }

  getHotel() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&data_type=IA_HOTEL&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded'});
    var url = this.baseUrl+'/facility/get_facility';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }

  getImportanNum() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&data_type=IA_IMP_NUMBER&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/facility/get_facility';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }

  getShop() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&data_type=IA_SHOP&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/facility/get_facility';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }


  getNews() {
    var obj = "username=uapidummy&password=Ymm4ipa&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/news/get_news';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }


  getBaggage() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&api=Baggage&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/baggage/get_baggage';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }

  //tv
  getTV() {
    var obj = "username=uapidummy&password=Ymm4ipa&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/ap2tv/get_ap2tv/';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }
  //report

  getReport() {
    var obj = "username=uapidummy&password=Ymm4ipa&cabang=CGK&submit=Submit";
    var headers = new Headers({  'Content-Type': 'application/x-www-form-urlencoded' });
    var url = this.baseUrl+'/report/get_report';
    var response = this.http.post(url,obj, { headers: headers }).map(res => res.json());
    return response;
  }

}
