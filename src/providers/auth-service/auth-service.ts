import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
export class User {
  username: string;
  email: string;
  password: string;
  con_password: string;
  constructor(email: string, username: string, password: string, con_password: string) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.con_password = con_password;
  }
}

@Injectable()
export class AuthServiceProvider {
  currentUser;
  listUser: Array<any> = [];

  addAdmin() {
    var admin = new User('admin@paygo.com', 'admin', 'admin', 'admin');
    this.listUser.push(admin);
  }

  public login(credentials) {
    if (credentials.username === "" || credentials.password === "") {
      return Observable.create(observer => {
         observer.next(null);
         observer.complete();
      });
    } else {
      return Observable.create(observer => {
        // At this point make a request to your backend to make a real check!
        var user;
        this.listUser.forEach((obj) => {
          if (obj.username === credentials.username) {
            user = obj;
            if (credentials.username === user.username && credentials.password === user.password) {
              this.currentUser = user;
              observer.next(true);
              observer.complete();
            } else {
              observer.next("wrong");
              observer.complete();
            }
          }else {
              observer.next(false);
              observer.complete();
          }
        });



      });
    }
  }

  public register(credentials) {
    if (credentials.username === "" || credentials.password === "null") {
       return Observable.create(observer => {
         observer.next(null);
         observer.complete();
      });
    } else {
      // At this point store the credentials to your backend!
      this.listUser.push(credentials);
      return Observable.create(observer => {
        observer.next(this.listUser);
        console.log(this.listUser)
        observer.complete();
      });
    }
  }

  public getUserInfo(): User {
    return this.currentUser;
  }

  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}