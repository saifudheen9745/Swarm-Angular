import { Component } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { ToastCollectionService } from 'src/app/shared/services/toast/toast-collection.service';
import { FirebaseService } from 'src/firebase/firebase.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  email: string;
  password: string;
  emailError: string;
  passwordError: string;
  constructor(private loginService: LoginServiceService, private toasts:ToastCollectionService, private googleAuth:FirebaseService) {}

  validateEmail = () => {
    this.loginService.validateEmail(this.email);
    this.loginService.emailError.subscribe((error) => {
      this.emailError = error;
    });
  };

  validatePassword = () => {
    this.passwordError = this.loginService.validatePassword(this.password);
  };

  loginFormSubmit = ()=>{
    const email = "email@gmail.com"
    const pass = 'pass'
    if(this.email !== email || this.password !== pass){
      this.toasts.errorToast()
    }else{
      this.toasts.successToast()
    }
  }

  google = ()=>{
    this.googleAuth.loginWithGoogle()
  }
}
