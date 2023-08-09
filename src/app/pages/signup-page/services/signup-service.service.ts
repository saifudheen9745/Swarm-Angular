import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUp, googleDetails } from 'src/app/config/config.types';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SignupServiceService {
  constructor(private api: HttpClient) {}

  doRegister = (SignupDetails: SignUp) => {
    return this.api.post(`${environment.baseUrl}/register`, SignupDetails);
  };

  doRegisterWithGoogle = (googleDetails: googleDetails) => {
    return this.api.post(
      `${environment.baseUrl}/googleregister`,
      googleDetails
    );
  };
}
