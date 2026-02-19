import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginData } from '../types/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private router = inject(Router);

  login(credentials: LoginData) {
    localStorage.setItem('credentials', JSON.stringify(credentials));
    this.router.navigate(['']);
  }

}
