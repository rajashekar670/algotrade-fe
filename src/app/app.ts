import { Component } from '@angular/core';
import { ShellLayout } from './layouts/shell-layout/shell-layout';
import { SpinnerComponent } from "./shared/spinner/spinner.component";


@Component({
  selector: 'app-root',
  imports: [ShellLayout, SpinnerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'algotrade';
}
