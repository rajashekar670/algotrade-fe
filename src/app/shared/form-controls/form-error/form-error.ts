import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-form-error',
  imports: [MatError],
  templateUrl: './form-error.html',
  styleUrl: './form-error.scss',
})
export class FormError {
  @Input()
  public control!: FormControl;

  @Input()
  public backendError ?: string;

  get showError(): boolean {
    return (
      !!this.control &&
      this.control.invalid &&
      (this.control.touched || this.control.dirty)
    );
  }

  get error(): string {
    if (!this.control || !this.control.errors) return '';

    const errors = this.control.errors;

    if (errors['required']) return 'Required.';
    if (errors['email']) return 'Invalid email format.';
    if (errors['minlength'])
      return `Minimum length is ${errors['minlength'].requiredLength}.`;
    if (errors['maxlength'])
      return `Maximum length is ${errors['maxlength'].requiredLength}.`;
    return '';
  }
}
