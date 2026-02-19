import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth';
import { UserData } from '../../types/auth';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  private authService = inject(AuthService);

  user: UserData = { email: '', password: '' };

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}
