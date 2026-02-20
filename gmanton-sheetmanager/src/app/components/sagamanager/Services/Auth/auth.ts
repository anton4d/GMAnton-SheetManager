import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  private loggedIn = false;
  private token: string | null = null;
  Gm = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.loadFromStorage();
  }

  private loadFromStorage() {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        this.loggedIn = true;
      }
    }
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  isGm() {
    return this.Gm;
  }

  login(token: string) {
    this.token = token;
    this.loggedIn = true;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
    }
  }

  logout() {
    this.token = null;
    this.loggedIn = false;
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }

  getToken() {
    return this.token;
  }
}