import { StrategyService } from './../../../../core/services/strategy.service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
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
import { Router, RouterModule } from '@angular/router';
import { MatNativeDateModule } from '@angular/material/core'; // Required for DateAdapter
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import {
  STRADDLE_ADJUSTMENT_OPTIONS,
  STRATEGY_EXPIRY_OPTIONS,
  STRATEGY_STATUS_OPTIONS,
} from '../../../../core/constants/dropdowns';
import { DropdownOption } from '../../../../core/models/drop-down-option.model';
import { MatIconModule } from '@angular/material/icon';
import { FormField } from '../../../../shared/forms/form-field/form-field';
import { BaseStrategy } from '../base-strategy/base-strategy';
import { ShortStraddleErrorModel } from '../../../../core/models/shortstraddle.error.model';
import { StrategyTypeEnum } from '../../../../core/constants/enums';
import { FormErrorHandlerService } from '../../../../core/services/form-error-handler.service';
import { SnackbarService } from '../../../../shared/services/snackbar.service';

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
    MatButtonModule,
    RouterModule,
    MatIconModule,
    FormField,
    BaseStrategy,

  ],
  templateUrl: './short-straddle.html',
  styleUrl: './short-straddle.scss',
})
export class ShortStraddle {
  form: FormGroup;
  backendError?: ShortStraddleErrorModel;

  // Drop down

  expiryList: DropdownOption[] = STRATEGY_EXPIRY_OPTIONS;
  straddleAdjustmentType: DropdownOption[] = STRADDLE_ADJUSTMENT_OPTIONS;
  expiryDatesList: [] = [];
  instrumentsList: [] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private strategyService: StrategyService,
    private errorHandler: FormErrorHandlerService,
    private cdr: ChangeDetectorRef,
    private snackBarService: SnackbarService
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      instrument: ['', Validators.required],
      quantity: [1, [Validators.min(1), Validators.required]],
      segment: ['OPTIONS', Validators.required],
      frequency: [10, [Validators.min(1), Validators.required]],
      label: [''],
      paperTrade: [false],
      broker: ['YP08050', Validators.required],
      expiry: ['WEEKLY', Validators.required],
      expiryDate: ['', Validators.required],
      optionType: ['SELL', Validators.required],
      startTime: ['', Validators.required],
      endTime: ['', Validators.required],
      target: [0],
      logsEnabled: [true],

      adjustmentType: ['STOPLOSS', Validators.required],
      adjustmentPercentage: [25, Validators.required],
      callStopLossStrikePrice: [0, Validators.required],
      putStopLossStrikePrice: [0, Validators.required],
      callStopLossPercentage: [40, Validators.required],
      putStopLossPercentage: [40, Validators.required],
      callStopLossPremium: [0, Validators.required],
      putStopLossPremium: [0, Validators.required],
      bufferStopLossForStrikePrice: [0, Validators.required],
      maxDiffAdjustmentPercentage: [50, Validators.required],
      targetPercentage: [0, Validators.required],
      dailyStartTime: ['10:00', Validators.required],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log(this.form.value);
      this.strategyService
        .createStrategy(StrategyTypeEnum.ShortStraddle, this.form.value)
        .subscribe({
          next: () => {
              this.snackBarService.success('Short Straddle created successfully')
          },
          error: (error) => {
            this.errorHandler.handleBackendErrors(error, this.form)
          },
        });
    }
  }

  goBack() {
    this.router.navigate(['/create-strategy']);
  }
}
