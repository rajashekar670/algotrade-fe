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
import { MatNativeDateModule } from '@angular/material/core'; // Required for DateAdapter
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-form-date-input',
  imports: [MatFormFieldModule, MatInputModule, FormError, MatNativeDateModule, MatSlideToggleModule, MatDatepickerModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormDateInput),
      multi: true,
    },
  ],
  templateUrl: './form-date-input.html',
  styleUrl: './form-date-input.scss',
})
export class FormDateInput implements ControlValueAccessor {
  constructor() {}

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public label!: string;

  @Input()
  public type!: string;

  public value: string ='' ;

  public changed!: (value: string) => void;

  public touched!: (() => void);

  public isDisabled: boolean = false;

  get formField() {
    return this.parentForm?.get(this.fieldName) as FormControl
  }

  onChange(event:any){
    console.log(event);
    this.changed(event.target.value)
  }

  writeValue(value: string): void {
    this.value = value;
  }
  registerOnChange(fn: any): void {
    this.changed = fn;
  }
  registerOnTouched(fn: any): void {
    this.touched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
