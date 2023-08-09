import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {

  constructor(private api: HttpClient) {}

  doLogin(email: string, password: string) {
    return this.api.post(environment.baseUrl, { email, password })
  }

  doGoogleLogin(email: string) {
    return this.api.post(`${environment.baseUrl}/googlelogin`, { email })
  }
}
