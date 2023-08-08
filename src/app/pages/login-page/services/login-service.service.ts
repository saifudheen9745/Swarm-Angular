import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {HttpClient} from '@angular/common/http'
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  emailError: BehaviorSubject<string> = new BehaviorSubject('');
  passwordError: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {}

  //To validate the email entered by the user
  validateEmail = (email: string): void => {
    const isValid = emailRegex.test(email);
    if (isValid) {
      this.emailError.next('');
    } else {
      this.emailError.next('Invalid email');
    }
  };

  validatePassword = (password: string): string => {
    return '';
  };

  doLogin(email:string,password:string):Observable<any>{
    return of('')
  }
}
