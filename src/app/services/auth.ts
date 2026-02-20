import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData, RegisterData } from '../types/auth';

const CREDENTIALS_KEY = 'credential';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  isAuth() {
    const isCredentials = localStorage.getItem(CREDENTIALS_KEY);
    return isCredentials;
  }

  getUser() {
    const user = localStorage.getItem(CREDENTIALS_KEY);
    const parsedUser = user ? JSON.parse(user) : null
    return parsedUser;
  }

  register(credentials: RegisterData) {
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
    this.router.navigate(['']).then(() => window.location.reload());
  }

  login(credentials: LoginData) {
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
    this.router.navigate(['']).then(() => window.location.reload());
  }

  logout() {
    localStorage.removeItem(CREDENTIALS_KEY);
    window.location.reload();
  }
}
