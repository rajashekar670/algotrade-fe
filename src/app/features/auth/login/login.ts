import { LoginError } from './../../../core/models/auth.model';
import { ChangeDetectorRef, Component, PLATFORM_ID } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../../core/services/auth.service';
import { FormField } from '../../../shared/forms/form-field/form-field';
import { CommonModule } from '@angular/common';
import { FormErrorHandlerService } from '../../../core/services/form-error-handler.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { LoadingService } from '../../../shared/services/loading.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormField,
    CommonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    RouterModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loading : boolean = false;

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private errorHandler: FormErrorHandlerService,
    private cdr: ChangeDetectorRef,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25),
        ],
      ],
    });
  }

  onSubmit(): void {
    this.loading = true;
    this.auth.login(this.form.value).subscribe({
      next: () => {
        this.loading = false;
        this.cdr.markForCheck();
        this.router.navigate(['/strategies']);
      },
      error: (error) => {
        this.loading = false;
        this.errorHandler.handleBackendErrors(
          error,
          this.form,
        );
        this.cdr.markForCheck();
      },
    });
  }
}
