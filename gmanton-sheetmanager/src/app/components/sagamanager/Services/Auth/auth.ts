import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  private loggedIn = false;
  Gm = false;

  isLoggedIn() {
    return this.loggedIn;
  }

  isGm(){
    return this.Gm
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
