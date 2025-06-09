import { DropdownOption } from "../models/dropdown.model";
import { Expiry, StraddleAdjustmentType, StrategyStatus } from "./enums";

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

export const STRADDLE_ADJUSTMENT_OPTIONS: DropdownOption<StraddleAdjustmentType>[] = [
  { value: StraddleAdjustmentType.Stoploss, label: 'Stoploss' },
  { value: StraddleAdjustmentType.Straddle, label: 'Straddle' },
];

