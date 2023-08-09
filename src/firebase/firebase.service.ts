import { Injectable, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import * as firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: environment.FIREBASE_API_KEY,
  authDomain: environment.AUTH_DOMAIN,
  projectId: environment.PROJECT_ID,
  storageBucket: environment.STORAGE_BUCKET,
  messagingSenderId: environment.MESSAGING_SENDER_ID,
  appId: environment.APP_ID,
  measurementId: environment.MEASUREMENT_ID,
};
@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  provider: any;
  auth: any;

  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
  }

  loginWithGoogle = async() => {
    return await signInWithPopup(this.auth, this.provider)
  };
}
