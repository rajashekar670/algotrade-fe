import { BottomNav } from './../bottom-nav/bottom-nav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from '../sidebar/sidebar';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-shell-layout',
  imports: [BottomNav, MatSidenavModule, MatToolbarModule, RouterOutlet, Sidebar, AsyncPipe],
  templateUrl: './shell-layout.html',
  styleUrl: './shell-layout.scss'
})
export class ShellLayout {
private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
}
