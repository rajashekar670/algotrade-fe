import { inject, PLATFORM_ID } from '@angular/core';
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

export const httpErrorInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const snackBar = inject(MatSnackBar);
  const router = inject(Router);
  const platformId = inject(PLATFORM_ID);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 0) {
        const message = 'Server is unreachable. Please try again later.';

        snackBar.open(message, 'X', {
          duration: 4000,
          verticalPosition: 'top',
          panelClass: ['snack-error'],
        });
      } else if (error.status === 401) {
        if (error.error?.error === 'Invalid credentials') {
          snackBar.open(error.error?.error, 'X', {
            duration: 4000,
            verticalPosition: 'top',
            panelClass: ['snack-error'],
          });
        } else {
          if (isPlatformBrowser(platformId)) {
            localStorage.removeItem('token');
            snackBar.open('Unauthorized. Please log in again.', 'X', {
              duration: 4000,
              verticalPosition: 'top',
              panelClass: ['snack-error'],
            });
            router.navigate(['/login']);
          }
        }
      }

      return throwError(() => error);
    })
  );
};
