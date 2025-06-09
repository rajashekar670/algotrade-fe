import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DropdownOption } from '../../../core/models/dropdown.model';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { Instrument as InstrumentService } from '../../../core/services/instrument';

@Component({
  selector: 'app-form-expirydate-dropdown',
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  templateUrl: './form-expirydate-dropdown.html',
  styleUrl: './form-expirydate-dropdown.scss',
})
export class FormExpirydateDropdown {
  @Input({ required: true }) parentForm!: FormGroup;
  @Input({ required: true }) fieldName!: string;
  @Input({ required: true }) instrumentControlName!: string;

  expiryOptions: DropdownOption[] = [];

  constructor(private instrumentService: InstrumentService) {}

  ngOnInit(): void {
    this.parentForm
      .get(this.instrumentControlName)
      ?.valueChanges.subscribe((selectedInstrument) => {
        this.instrumentService.getInstruments().subscribe((data) => {
          const instrument = data.find((i) => i.name === selectedInstrument);
          this.expiryOptions =
            instrument?.expiryDates?.map((e) => ({
              value: e.expiryDate ?? '',
              label: `${e.expiryDate}${e.weekly ? ' (W)' : '(M)'}`,
            })) ?? [];

          this.parentForm.get(this.fieldName)?.reset();
        });
      });
  }

  get formField(): FormControl {
    return this.parentForm.get(this.fieldName) as FormControl;
  }

  isInvalid(): boolean {
    const control = this.parentForm.get(this.fieldName);
    return !!(control?.invalid && (control.dirty || control.touched));
  }
}
