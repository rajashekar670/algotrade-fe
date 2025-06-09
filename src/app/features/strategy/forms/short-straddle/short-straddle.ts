import { FormSelectInput } from './../../../../shared/form-controls/form-select-input/form-select-input';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { Router } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core'; // Required for DateAdapter
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormTextInput } from '../../../../shared/form-controls/form-text-input/form-text-input';
import { FormSwitchInput } from '../../../../shared/form-controls/form-switch-input/form-switch-input';
import { MatButtonModule } from '@angular/material/button';
import {
  STRADDLE_ADJUSTMENT_OPTIONS,
  STRATEGY_EXPIRY_OPTIONS,
  STRATEGY_STATUS_OPTIONS,
} from '../../../../core/constants/dropdowns';
import { DropdownOption } from '../../../../core/models/dropdown.model';
import { Instrument } from '../../../../core/services/instrument';
import { FormInstrumentDropdown } from "../../../../shared/form-controls/form-instrument-dropdown/form-instrument-dropdown";
import { FormExpirydateDropdown } from "../../../../shared/form-controls/form-expirydate-dropdown/form-expirydate-dropdown";

@Component({
  selector: 'app-short-straddle',
  imports: [
    MatSlideToggleModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    CommonModule,
    MatInputModule,
    MatCardModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    FormTextInput,
    FormSelectInput,
    FormSwitchInput,
    MatButtonModule,
    FormInstrumentDropdown,
    FormExpirydateDropdown
],
  templateUrl: './short-straddle.html',
  styleUrl: './short-straddle.scss',
})
export class ShortStraddle {
  form: FormGroup;

  // Drop down
  statusList: DropdownOption[] = STRATEGY_STATUS_OPTIONS;
  expiryList: DropdownOption[] = STRATEGY_EXPIRY_OPTIONS;
  straddleAdjustmentType: DropdownOption[] = STRADDLE_ADJUSTMENT_OPTIONS;
  expiryDatesList: [] = [];
  instrumentsList: [] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private instrumentService: Instrument
  ) {
    this.form = this.fb.group({
      user: ['rajashekar670@gmail.com', Validators.required],
      id: ['', Validators.required],
      instrument: ['', Validators.required],
      quantity: [1, [Validators.min(1), Validators.required]],
      segment: ['OPTIONS', Validators.required],
      strategy: ['SHORT_STRADDLE', Validators.required],
      status: ['NEW', Validators.required],
      frequency: [10, [Validators.min(1), Validators.required]],
      label: [''],
      paperTrade: [false],
      pl: [0],
      broker: ['YP08050', Validators.required],
      expiry: ['WEEKLY', Validators.required],
      expiryDate: ['', Validators.required],
      optionType: ['SELL', Validators.required],
      additionalATMPoints: [0],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      target: [0],
      logsEnabled: [true],

      adjustmentType: ['STRADDLE', Validators.required],
      adjustmentPercentage: [25, Validators.required],
      callStopLossStrikePrice: [0, Validators.required],
      putStopLossStrikePrice: [0, Validators.required],
      callStopLossPercentage: [40, Validators.required],
      putStopLossPercentage: [40, Validators.required],
      callStopLossPremium: [0, Validators.required],
      putStopLossPremium: [0, Validators.required],
      bufferStopLossForStrikePrice: [0, Validators.required],
      maxPL: [0, Validators.required],
      maxDiffAdjustmentPercentage: [50, Validators.required],
      targetPercentage: [0, Validators.required],
      dailyStartTime: ['10:00', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // call service to save
    }
  }

  goBack() {
    this.router.navigate(['../']);
  }
}
