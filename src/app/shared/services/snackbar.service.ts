import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor() { }

  private snackBar = inject(MatSnackBar);

  show(message: string, action: string = 'X', duration = 3000): void {
    this.snackBar.open(message, action, {
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['custom-snackbar'] // optional custom styling
    });
  }

  error(message: string, duration = 4000): void {
    this.snackBar.open(message, 'X', {
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snack-error']
    });
  }

  success(message: string, duration = 3000): void {
    this.snackBar.open(message, 'X', {
      duration,
      horizontalPosition: 'center',
      verticalPosition: 'top',
      panelClass: ['snack-success']
    });
  }
}
