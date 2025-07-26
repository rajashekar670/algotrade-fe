import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-strategy-types',
  imports: [MatIconModule, MatListModule, MatCardModule],
  templateUrl: './strategy-types.html',
  styleUrl: './strategy-types.scss',
})
export class StrategyTypes {
  constructor(private router: Router) {}
  selectedStrategy: string | null = null;
  strategies = [
    'Short Straddle',
    'Short Strangle',
  ];

  navigateToStrategy(strategy: string) {
    const route = strategy.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/create-strategy', route]);
  }
}
