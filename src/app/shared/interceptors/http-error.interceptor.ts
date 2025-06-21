import { inject } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const snackBar = inject(MatSnackBar);
  const router = inject(Router);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        const message = !navigator.onLine
          ? 'You are offline. Please check your connection.'
          : 'Server is unreachable. Please try again later.';

        snackBar.open(message, 'X', {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['snackbar-error'],
        });
      } else if (error.status === 401) {
        if (error.error?.error === 'Invalid credentials') {
          snackBar.open(error.error?.error, 'X', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: ['snackbar-error'],
          });
        } else {
          localStorage.removeItem("token")
          snackBar.open('Unauthorized. Please log in again.', 'X', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: ['snackbar-error'],
          });
          router.navigate(['/login']);
        }
      }

      return throwError(() => error);
    })
  );
};
