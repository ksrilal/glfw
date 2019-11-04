import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private afauth: AngularFireAuth) {

  }

  logout() {
    this.afauth.auth.signOut();
  }


  login(){

    this.afauth.auth.createUserWithEmailAndPassword('abc@gmail.com','Mahee@123').then((result)=>{
      window.alert("Yureka");
    });
  }
}
