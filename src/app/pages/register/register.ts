import { Component, inject, signal } from '@angular/core';
import { debounce, email, form, FormField, maxLength, minLength, required } from '@angular/forms/signals';
import { AuthService } from '../../services/auth';
import { RegisterData } from '../../types/auth';

@Component({
  selector: 'app-register',
  imports: [FormField],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  private authService = inject(AuthService);

  registerModel = signal<RegisterData>({
    username: '',
    email: '',
    password: '',
  });

  registerForm = form(this.registerModel, (schemaPath) => {
    debounce(schemaPath.username, 500)
    required(schemaPath.username, {message: 'Le nom d\'utilisateur est requis'});
    maxLength(schemaPath.username, 100, {message: 'Le nom d\'utilisateur doit être au maximum de 100 caractères'});

    debounce(schemaPath.email, 500)
    required(schemaPath.email, {message: 'L\'email est requis'});
    email(schemaPath.email, {message: 'Entrer un email valide'});

    debounce(schemaPath.password, 500)
    required(schemaPath.password, {message: 'Le mot de passe est requis'});
    minLength(schemaPath.password, 8, {message: 'Le mot de passe doit contenir au moins 8 caractères'});
  });

  async onSubmit() {
    const formData = this.registerModel();
    await this.authService.register(formData);
  }
}
