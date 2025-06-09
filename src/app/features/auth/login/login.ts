import { LoginError, LoginRequest } from './../../../core/models/auth.model';
import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../../../core/services/auth';
import { EmptyError } from 'rxjs';
import { FormTextInput } from '../../../shared/form-controls/form-text-input/form-text-input';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormTextInput
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  error?: LoginError;

  form: FormGroup;
  constructor(private fb: FormBuilder, private auth: Auth, private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
    });

  }

  onSubmit() :void {
    if (this.form.invalid) return;
    this.auth.login(this.form.value).subscribe({
      next: () => {
        this.error = {}
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.error = { ...error};
        this.cdr.markForCheck();
      }
    });
  }
}
