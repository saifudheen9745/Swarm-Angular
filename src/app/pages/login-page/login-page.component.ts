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
  constructor(
    private loginService: LoginServiceService,
    private toasts: ToastCollectionService,
    private googleAuth: FirebaseService
  ) {}

  validateEmail = () => {
    const isValid = emailRegex.test(this.email);
    if (isValid) {
      this.emailError = '';
    } else {
      this.emailError = 'Invalid email';
    }
  };

  validatePassword = () => {
    if (this.password.length < 8) {
      this.passwordError = 'Need atleast eight character';
    } else {
      this.passwordError = '';
    }
  };

  loginFormSubmit = () => {
    if (this.emailError?.length === 0 && this.passwordError?.length === 0) {
      this.loginService.doLogin(this.email, this.password).subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          this.toasts.LoginErrorToast(error.error.error.error.msg);
        }
      );
    }else{
       this.toasts.customErrorToast("All fileds must be provided");
    }
  };

  handleGoogleLogin = () => {
    this.googleAuth
      .loginWithGoogle()
      .then((data) => {
        this.loginService.doGoogleLogin(data?.user?.email as string).subscribe(
          (data) => {
            console.log(data);
          },
          (error) => {
            this.toasts.customErrorToast(error.error.error.error.msg);
          }
        );
      })
      .catch((error) => {
        console.log('from google auth', error);
      });
  };
}
