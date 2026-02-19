import { Component, inject, signal } from '@angular/core';
import { debounce, email, form, FormField, minLength, required } from '@angular/forms/signals';
import { LoginData } from '../../types/auth';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormField],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private authService = inject(AuthService);

  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    debounce(schemaPath.email, 500)
    required(schemaPath.email, {message: 'L\'email est requis'});
    email(schemaPath.email, {message: 'Entrer un email valide'});

    debounce(schemaPath.password, 500)
    required(schemaPath.password, {message: 'Le mot de passe est requis'});
    minLength(schemaPath.password, 8, {message: 'Le mot de passe doit contenir au moins 8 caractères'});
  });

  async onSubmit() {
    const formData = this.loginModel();
    await this.authService.login(formData);
  }

}
