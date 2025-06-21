import { inject, Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class FormErrorHandlerService {
  constructor() {}
  private snackbar = inject(MatSnackBar);
  handleBackendErrors(error: any, form: FormGroup): void {
    if (error?.status === 400) {
      const fieldErrors = error.error;
      Object.keys(fieldErrors).forEach((field) => {
        if (form.controls[field]) {
          form.controls[field].setErrors({ backend: fieldErrors[field] });
        }
      });
    }

    // mark all fields as touched
    Object.values(form.controls).forEach((control) => control.markAsTouched());
  }
}
