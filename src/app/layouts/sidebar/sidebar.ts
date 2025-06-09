import { MatIconModule } from '@angular/material/icon';
import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-sidebar',
  imports: [MatListModule, MatIconModule, MatSidenavModule, MatToolbarModule, RouterModule],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss'
})
export class Sidebar {
showStrategySubmenu = false;

  toggleStrategySubmenu() {
    this.showStrategySubmenu = !this.showStrategySubmenu;
  }
}
