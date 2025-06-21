import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  Component,
  Input,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-switch-input',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-switch-input.html',
  styleUrl: './form-switch-input.scss',
})
export class FormSwitchInput {
  @Input() parentForm!: FormGroup;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() isDisabled: boolean = false;

  get control(): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }
}
