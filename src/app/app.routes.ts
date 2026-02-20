import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Video } from './pages/video/video';
import { Login } from './pages/login/login';
import { Register } from './pages/register/register';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', component: Home, canActivate: [authGuard] },
    { path: 'video/:id', component: Video, canActivate: [authGuard] },
    { path: 'connexion', component: Login },
    { path: 'inscription', component: Register }
];
