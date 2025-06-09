import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Instrument as InstrumentService } from '../../../core/services/instrument';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Instrument } from '../../../core/models/api.response.model';
import { DropdownOption } from '../../../core/models/dropdown.model';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-form-instrument-dropdown',
  imports: [CommonModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
  templateUrl: './form-instrument-dropdown.html',
  styleUrl: './form-instrument-dropdown.scss',
})
export class FormInstrumentDropdown implements OnInit {
  @Input({ required: true }) parentForm!: FormGroup;
  @Input({ required: true }) fieldName!: string;

  instruments: Instrument[] = [];
  instrumentOptions: DropdownOption[] = [];

  constructor(private instrumentService: InstrumentService) {}

  ngOnInit(): void {
    this.instrumentService.getInstruments().subscribe((data) => {
      this.instruments = data;
      this.instrumentOptions = data.map((i) => ({
        value: i.name ?? '',
        label: i.name ?? '',
      }));
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
