import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { ROUTES } from '../../../core/constants/app';
import { STRATEGY_TYPES } from '../../../core/configs/strategy-type-config';

@Component({
  selector: 'app-strategy-types',
  imports: [MatIconModule, MatListModule, MatCardModule],
  templateUrl: './strategy-type-list.html',
  styleUrl: './strategy-type-list.scss',
})
export class StrategyTypeList {
  constructor(private router: Router) {}
  selectedStrategy: string | null = null;
  strategies = STRATEGY_TYPES;

  navigateToStrategy(strategy: string) {
    this.router.navigate([ROUTES.STRATEGIES.CREATE, strategy]);
  }
}
