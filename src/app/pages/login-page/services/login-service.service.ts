import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  baseUrl = 'https://swarm-official.online/server/';

  constructor(private api: HttpClient) {}

  doLogin(email: string, password: string) {
    this.api.post(this.baseUrl, { email, password }).subscribe((data) => {
      console.log(data);
    });
  }

  doGoogleLogin(email: string) {
    this.api.post(`${this.baseUrl}/googlelogin`, { email }).subscribe((data) => {
      console.log(data);
    });
  }
}
