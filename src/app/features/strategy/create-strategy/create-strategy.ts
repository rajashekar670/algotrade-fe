import { Component } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-strategy',
  imports: [MatIconModule, MatListModule, MatCardModule],
  templateUrl: './create-strategy.html',
  styleUrl: './create-strategy.scss'
})
export class CreateStrategy {

  constructor(private router : Router) {}
selectedStrategy: string | null = null;

  strategies = [
    'Short Straddle',
    'Short Strangle',
    'Iron Condor',
    'Bull Put Spread',
    'Bear Call Spread',
  ];

  navigateToStrategy(strategy: string) {
    const route = strategy.toLowerCase().replace(/\s+/g, '-');
    this.router.navigate(['/create-strategy', route]);
  }
}
