import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Component, forwardRef, Input } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-switch-input',
  imports: [MatFormFieldModule, MatInputModule, MatSlideToggleModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSwitchInput),
      multi: true,
    },
  ],
  templateUrl: './form-switch-input.html',
  styleUrl: './form-switch-input.scss',
})
export class FormSwitchInput implements ControlValueAccessor {
constructor() {}

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public label!: string;

  public value: boolean = false ;

  public changed!: (value: string) => void;

  public touched!: (() => void);

  public isDisabled: boolean = false;

  get formField() {
    return this.parentForm?.get(this.fieldName) as FormControl
  }

  onChange(event:any){
    this.changed(event.checked)
  }

  writeValue(value: boolean): void {
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
