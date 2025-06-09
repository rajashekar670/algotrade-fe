import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { CreateStrategy } from './features/strategy/create-strategy/create-strategy';
import { ShortStraddle } from './features/strategy/forms/short-straddle/short-straddle';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'create-strategy', component: CreateStrategy },
  { path: 'create-strategy/short-straddle', component: ShortStraddle },
];
