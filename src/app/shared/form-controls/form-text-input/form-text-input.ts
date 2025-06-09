import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormError } from "../form-error/form-error";

@Component({
  selector: 'app-form-text-input',
  imports: [MatFormFieldModule, MatInputModule, FormError],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormTextInput),
      multi: true,
    },
  ],
  templateUrl: './form-text-input.html',
  styleUrl: './form-text-input.scss',
})
export class FormTextInput implements ControlValueAccessor {
  @Input() parentForm!: FormGroup;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() backendError?: string;

  value: string = '';
  isDisabled: boolean = false;

  changed: (value: string) => void = () => {};
  touched: () => void = () => {};

  get formField(): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  onChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.value = input.value;
    this.changed(this.value);
  }

  onBlur() {
    this.touched();
  }

  writeValue(value: string): void {
    this.value = value ?? '';
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
