import { DropdownOption } from '../models/drop-down-option.model';
import {
  Expiry,
  OptionTypeEnum,
  StraddleAdjustmentType,
  StrangleEntryType,
  StrategyStatus,
} from './enums';

export const OPTION_TYPE_OPTIONS: DropdownOption<OptionTypeEnum>[] = [
  { value: OptionTypeEnum.Buy, label: 'Buy' },
  { value: OptionTypeEnum.Sell, label: 'Sell' },
  { value: OptionTypeEnum.NA, label: 'NA' },
];

export const STRATEGY_STATUS_OPTIONS: DropdownOption<StrategyStatus>[] = [
  { value: StrategyStatus.New, label: 'New' },
  { value: StrategyStatus.Running, label: 'Running' },
  { value: StrategyStatus.Completed, label: 'Completed' },
  { value: StrategyStatus.Aborted, label: 'Aborted' },
  { value: StrategyStatus.Scheduled, label: 'Scheduled' },
];

export const STRATEGY_EXPIRY_OPTIONS: DropdownOption<Expiry>[] = [
  { value: Expiry.Weekly, label: 'Weekly' },
  { value: Expiry.Monthly, label: 'Monthly' },
  { value: Expiry.NA, label: 'NA' },
];

export const STRADDLE_ADJUSTMENT_OPTIONS: DropdownOption<StraddleAdjustmentType>[] =
  [
    { value: StraddleAdjustmentType.Stoploss, label: 'Stoploss' },
    { value: StraddleAdjustmentType.Straddle, label: 'Straddle' },
  ];

export const STRANGLE_ENTRY_TYPE_OPTIONS: DropdownOption<StrangleEntryType>[] =
  [
    { value: StrangleEntryType.Premium, label: 'Premium' },
    { value: StrangleEntryType.StrikePrice, label: 'Strike Price' },
  ];
