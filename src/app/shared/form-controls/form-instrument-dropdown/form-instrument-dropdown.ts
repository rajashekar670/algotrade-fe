import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { InstrumentService as InstrumentService } from '../../../core/services/instrument.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InstrumentModel } from '../../../core/models/api.response.model';
import { DropdownOption } from '../../../core/models/drop-down-option.model';
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

  instruments: InstrumentModel[] = [];
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
