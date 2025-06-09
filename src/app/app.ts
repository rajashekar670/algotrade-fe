import { Component } from '@angular/core';
import { ShellLayout } from './layouts/shell-layout/shell-layout';


@Component({
  selector: 'app-root',
  imports: [ShellLayout],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'algotrade';
}
