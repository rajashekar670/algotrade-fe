import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Register } from './features/auth/register/register';
import { StrategyListComponent } from './features/strategy/strategy-list/strategy-list.component';
import { StrategyTypeList } from './features/strategy/strategy-type-list/strategy-type-list';
import { StrategyCreate } from './features/strategy/strategy-create/strategy-create';
import { StrategyDetailComponent } from './features/strategy/strategy-detail/strategy-detail.component';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  {
    path: 'strategies',
    children: [
      {
        path: '',
        component: StrategyListComponent,
      },
      {
        path: 'create',
        component: StrategyTypeList,
      },
      {
        path: 'create/:type',
        component: StrategyCreate,
      },
      {
        path: ':id',
        component: StrategyDetailComponent,
      },
    ],
  },
];
