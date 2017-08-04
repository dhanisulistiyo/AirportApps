import { AuthServiceProvider } from './../../providers/auth-service/auth-service';
import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-register',
    templateUrl: 'register.html'
})
export class RegisterPage {
    createSuccess = false;
    registerCredentials = { email: '', username: '', password: '', con_password: '' };

    constructor(private nav: NavController, private auth: AuthServiceProvider, private alertCtrl: AlertController, public load: LoadingController) { }

    public register() {
        let reg = this.registerCredentials;
        if (reg.password != reg.con_password) {
            this.showAlertValidasiPassword();
        }else if(reg.password == ""){
                this.showPopup("Error", "Please input password.");

        }else if(reg.username==""){
                this.showPopup("Error", "Please input username.");

        }
         else {
            let loader = this.load.create({
                content: 'Please wait...'
            });
            loader.present();
            this.auth.register(this.registerCredentials).subscribe(success => {
                if (success) {
                     setTimeout(() => {
                        loader.dismiss();
                        this.createSuccess = true;
                        this.showPopup("Success", "Account created.");        
                    }, 2000);             
                    
                } else {                   
                    setTimeout(() => {
                        loader.dismiss();
                       this.showPopup("Error", "Problem creating account.");       
                    }, 2000);  
                    
                }
            },
                error => {
                    setTimeout(() => {
                        loader.dismiss();
                       this.showPopup("Error", error);       
                    }, 2000);  
                    
                    
                });
        }
    }

    public login() {
        this.nav.pop();
    }

    showPopup(title, text) {
        let alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: data => {
                        if (this.createSuccess) {
                            this.nav.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    }


    showAlertValidasiPassword() {
        let alert = this.alertCtrl.create({
            subTitle: 'Password and Confirm Password Not Match',
            buttons: ['OK']
        });
        alert.present();
    }

}