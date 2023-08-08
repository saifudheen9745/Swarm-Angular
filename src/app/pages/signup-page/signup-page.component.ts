import { Component } from '@angular/core';
import { SignUp } from 'src/app/config/config.types';

const spaceRegex = /\s/;
const numberRegex = /\d/;
const charRegex = /[^a-zA-Z0-9\s]/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const mobileRegex = /^\d{10}$/;

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
})
export class SignupPageComponent {
  SignUpDetails: SignUp = {
    fullName: null,
    email: null,
    mobile: null,
    password: null,
    confirmPassword: null,
  };

  SignupErrorDetails: SignUp = {
    fullName: null,
    email: null,
    mobile: null,
    password: null,
    confirmPassword: null,
  };


  constructor() {}

  

  validateFullName = (): void => {
    if (this.SignUpDetails.fullName != null) {
      if (spaceRegex.test(this.SignUpDetails.fullName)) {
        this.SignupErrorDetails.fullName = 'Spaces are not allowed';
      } else if (numberRegex.test(this.SignUpDetails.fullName)) {
        this.SignupErrorDetails.fullName = 'Numbers are not allowed';
      } else if (charRegex.test(this.SignUpDetails.fullName)) {
        this.SignupErrorDetails.fullName = 'Special characters are not allowed';
      } else {
        this.SignupErrorDetails.fullName = '';
      }
    }
  };

  validateEmail = (): void => {
    if (this.SignUpDetails.email != null) {
      if (emailRegex.test(this.SignUpDetails.email)) {
        this.SignupErrorDetails.email = '';
      } else {
        this.SignupErrorDetails.email = 'Invalid email';
      }
    }
  };

  validateMobile = (): void => {
    if (this.SignUpDetails.mobile != null) {
      if (mobileRegex.test(this.SignUpDetails.mobile)) {
        this.SignupErrorDetails.mobile = '';
      } else {
        this.SignupErrorDetails.mobile = 'Invalid mobile number';
      }
    }
  };

  validatePassword = (): void => {
    if (this.SignUpDetails.password != null) {
      if (spaceRegex.test(this.SignUpDetails.password)) {
        this.SignupErrorDetails.password = '';
      } else {
        if (this.SignUpDetails.password?.length >= 8) {
          this.SignupErrorDetails.password = '';
        } else {
          this.SignupErrorDetails.password =
            'Password must be atleast 8 characters';
        }
      }
    }
  };

  validateConfirmPassword = (): void => {
    if (
      this.SignUpDetails.confirmPassword != null &&
      this.SignUpDetails.password != null
    ) {
      if (this.SignUpDetails.password?.length > 0) {
        this.SignupErrorDetails.confirmPassword = '';
        if (
          this.SignUpDetails.password === this.SignUpDetails.confirmPassword
        ) {
          this.SignupErrorDetails.confirmPassword = '';
        } else {
          this.SignupErrorDetails.confirmPassword = "Password doesn't match";
        }
      } else {
        this.SignupErrorDetails.confirmPassword =
          'Must enter password before confirm password';
      }
    }
  };

  submitSignupForm = () => {};
}
