import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/service/authentication.service';
import {Router} from "@angular/router"




@Component({
  selector: 'app-login',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class LoginComponent {
  title = 'firebaseLogin';

  selectedVal: string;
  responseMessage: string = '';
  responseMessageType: string = '';
  emailInput: string;
  passwordInput: string;
  isForgotPassword: boolean;
  userDetails: any;


  constructor(
    private authService: AuthenticationService, private router: Router
  ) {
    this.selectedVal = 'login';
    this.isForgotPassword = false;

    if(localStorage.getItem('isLoggedIn') == 'false')
    {
      this.logoutUser();
    }



  }

  // Comman Method to Show Message and Hide after 2 seconds
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = "";
    }, 2000);
  }

  // Called on switching Login/ Register tabs
  public onValChange(val: string) {
    this.showMessage("", "");
    this.selectedVal = val;
  }

  // Check localStorage is having User Data
  isUserLoggedIn() {
    this.userDetails = this.authService.isUserLoggedIn();
    this.router.navigate(['events'])
  }

  // SignOut Firebase Session and Clean LocalStorage
  logoutUser() {
    this.authService.logout()
      .then(res => {
        console.log(res);
        this.userDetails = undefined;
        localStorage.removeItem('user');
        localStorage.setItem('isLoggedIn', 'false');

      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Login user with  provided Email/ Password
  loginUser() {
    this.responseMessage = "";
    this.authService.login(this.emailInput, this.passwordInput)
      .then(res => {
        console.log(res);
        this.showMessage("success", "Successfully Logged In!");
        this.isUserLoggedIn();
        localStorage.setItem('isLoggedIn', 'true');
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Register user with  provided Email/ Password
  registerUser() {
    this.authService.register(this.emailInput, this.passwordInput)
      .then(res => {

        // Send Varification link in email
        this.authService.sendEmailVerification().then(res => {
          console.log(res);
          this.isForgotPassword = false;
          this.showMessage("success", "Registration Successful! Please Verify Your Email");
        }, err => {
          this.showMessage("danger", err.message);
        });
        this.isUserLoggedIn();
        localStorage.setItem('isLoggedIn', 'true');


      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Send link on given email to reset password
  forgotPassword() {
    this.authService.sendPasswordResetEmail(this.emailInput)
      .then(res => {
        console.log(res);
        this.isForgotPassword = false;
        this.showMessage("success", "Please Check Your Email");
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

  // Open Popup to Login with Google Account
  googleLogin() {
    this.authService.loginWithGoogle()
      .then(res => {
        console.log(res);
        this.showMessage("success", "Successfully Logged In with Google");
        this.isUserLoggedIn();
        localStorage.setItem('isLoggedIn', 'true');
      }, err => {
        this.showMessage("danger", err.message);
      });
  }

}
