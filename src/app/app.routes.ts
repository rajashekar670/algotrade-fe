import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { ShortStraddle } from './features/strategy/forms/short-straddle/short-straddle';
import { StrategyListComponent } from './features/strategy/strategy-list/strategy-list.component';
import { StrategyTypes } from './features/strategy/strategy-types/strategy-types';
import { StrategyCreate } from './features/strategy/strategy-create/strategy-create';


export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'create', component: StrategyTypes },
  { path: 'create/short-straddle', component: StrategyCreate },
  { path: 'create-strategy/short-straddle', component: ShortStraddle },
  { path: 'strategies', component: StrategyListComponent },
  { path: 'strategies', component: StrategyListComponent },
];
