import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../types/auth';

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

  login(credentials: LoginData) {
    localStorage.setItem(CREDENTIALS_KEY, JSON.stringify(credentials));
    this.router.navigate(['']);
  }

  logout() {
    localStorage.clear();
    window.location.reload();
  }
}
