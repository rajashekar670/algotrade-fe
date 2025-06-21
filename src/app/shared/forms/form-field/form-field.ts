import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectChange, MatSelectModule } from '@angular/material/select';
import { DropdownOption } from '../../../core/models/drop-down-option.model';
import { MatSlideToggle, MatSlideToggleModule } from '@angular/material/slide-toggle';


@Component({
  selector: 'app-form-field',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './form-field.html',
  styleUrl: './form-field.scss',
})
export class FormField {
  @Input() parentForm!: FormGroup;
  @Input() fieldName!: string;
  @Input() label!: string;
  @Input() type: 'text' | 'password' | 'number' | 'select' | 'date' | 'datetime-local' | 'switch' = 'text';
  @Input() options?: DropdownOption[];
  @Input() placeholder: string = '';
  @Input() backendError?: string;

  @Output() valueChanged = new EventEmitter<any>();

  get control(): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  onSelectChange(event: MatSelectChange) {
  this.valueChanged.emit(event.value);
}
}
