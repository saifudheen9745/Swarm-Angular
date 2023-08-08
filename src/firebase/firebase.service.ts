import { Injectable, OnInit } from '@angular/core';

import * as firebase from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAytzUJej-AHX6C0UG875O30G697gWbe18',
  authDomain: 'swarm-615d0.firebaseapp.com',
  projectId: 'swarm-615d0',
  storageBucket: 'swarm-615d0.appspot.com',
  messagingSenderId: '3074624752',
  appId: '1:3074624752:web:fe1cdeca07024779664635',
  measurementId: 'G-3E3XFEGKZE',
};
@Injectable({
  providedIn: 'root',
})
export class FirebaseService implements OnInit {
  provider: any;
  auth: any;
  constructor() {
    firebase.initializeApp(firebaseConfig);
    this.provider = new GoogleAuthProvider();
    this.auth = getAuth();
  }

  ngOnInit(): void {
  }

  loginWithGoogle = () => {
    signInWithPopup(this.auth, this.provider)
      .then((result) => {
        console.log(result.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  };
}
