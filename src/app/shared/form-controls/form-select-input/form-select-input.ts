import { MatSelectModule } from '@angular/material/select';
import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  FormGroup,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormError } from "../form-error/form-error";
import { DropdownOption } from '../../../core/models/drop-down-option.model';

@Component({
  selector: 'app-form-select-input',
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormError],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormSelectInput),
      multi: true,
    },
  ],
  templateUrl: './form-select-input.html',
  styleUrl: './form-select-input.scss',
})
export class FormSelectInput implements ControlValueAccessor {
  constructor() { }

  @Input()
  public parentForm!: FormGroup;

  @Input()
  public fieldName!: string;

  @Input()
  public label!: string;

  @Input()
  public type!: string;

  @Input()
  public items!: DropdownOption[];

  @Input() backendError?: string;

  @Output() changeEvent = new EventEmitter<string>();

  public value: string ='' ;


  public changed!: (value: string) => void;

  public touched!: (() => void);

  public isDisabled: boolean = false;

  get formField() {
    return this.parentForm?.get(this.fieldName) as FormControl
  }

  onChange(event:any){
    this.changed(event);
    this.changeEvent.emit(event);
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
