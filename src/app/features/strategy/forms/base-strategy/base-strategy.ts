import { StrategyErrorModel } from './../../../../core/models/strategy.error.model';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormField } from '../../../../shared/forms/form-field/form-field';
import { FormInstrumentDropdown } from '../../../../shared/form-controls/form-instrument-dropdown/form-instrument-dropdown';
import { FormExpirydateDropdown } from '../../../../shared/form-controls/form-expirydate-dropdown/form-expirydate-dropdown';
import { FormSwitchInput } from '../../../../shared/form-controls/form-switch-input/form-switch-input';
import { DropdownOption } from '../../../../core/models/drop-down-option.model';
import { STRATEGY_EXPIRY_OPTIONS } from '../../../../core/constants/dropdowns';

@Component({
  selector: 'app-base-strategy',
  imports: [
    FormField,
    FormInstrumentDropdown,
    FormExpirydateDropdown,
    FormSwitchInput,
  ],
  templateUrl: './base-strategy.html',
  styleUrl: './base-strategy.scss',
})
export class BaseStrategy {
  @Input({ required: true }) formGroup!: FormGroup;
  expiryList: DropdownOption[] = STRATEGY_EXPIRY_OPTIONS;
}
