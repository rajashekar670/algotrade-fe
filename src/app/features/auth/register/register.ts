import { ChangeDetectorRef, Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { FormTextInput } from '../../../shared/form-controls/form-text-input/form-text-input';
import { RegisterError } from '../../../core/models/auth.model';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormTextInput
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  form: FormGroup;
  error?: RegisterError;

  constructor(private fb: FormBuilder, private auth: AuthService, private cdr: ChangeDetectorRef) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(25)]],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    });
  }

onSubmit() :void {
    if (this.form.invalid) return;
    this.auth.register(this.form.value).subscribe({
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
