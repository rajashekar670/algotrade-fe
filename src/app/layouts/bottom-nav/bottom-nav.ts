import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  imports: [MatToolbarModule,MatButtonModule, MatIconModule,MatTabsModule, RouterModule],
  templateUrl: './bottom-nav.html',
  styleUrl: './bottom-nav.scss'
})
export class BottomNav {

}
