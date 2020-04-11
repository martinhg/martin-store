import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private authentication: AngularFireAuth
    ) {}

  createUser(email: string, password: string) {
    return this.authentication.createUserWithEmailAndPassword(email, password);
  }

  login(email: string, password: string) {
    return this.authentication.signInWithEmailAndPassword(email, password);
  }

  logout() {
    return this.authentication.signOut();
  }

  hasUser(){
    return this.authentication.authState;
  }
}
