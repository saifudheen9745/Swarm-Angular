import { Component } from '@angular/core';
import { LoginServiceService } from './services/login-service.service';
import { ToastCollectionService } from 'src/app/shared/services/toast/toast-collection.service';
import { FirebaseService } from 'src/firebase/firebase.service';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

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
    const isValid = emailRegex.test(this.email);
    if (isValid) {
      this.emailError = '';
    } else {
      this.emailError = 'Invalid email'
    }
  };

  validatePassword = () => {
    if(this.password.length < 8){
      this.passwordError = 'Need atleast eight character'
    }else{
      this.passwordError = ''
    }
  };

  loginFormSubmit = ()=>{
    this.loginService.doLogin(this.email,this.password)
  }

  google = ()=>{
    this.googleAuth.loginWithGoogle().then((data)=>{
      this.loginService.doGoogleLogin(data?.user?.email as string)
    }).catch((error)=>{
      console.log(error);
      
    })
  }
}
