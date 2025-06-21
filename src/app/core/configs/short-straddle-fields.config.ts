import { STRADDLE_ADJUSTMENT_OPTIONS } from "../constants/dropdowns";
import { FormFieldConfig } from "../models/form-schema.model";

export const ShortStraddleFields: FormFieldConfig[] = [
  {
    key: 'adjustmentType',
    label: 'Adjustment Type',
    type: 'select',
    options: STRADDLE_ADJUSTMENT_OPTIONS,
    required: true,
  },
  {
    key: 'adjustmentPercentage',
    label: 'Adjustment %',
    type: 'number',
    required: true,
    defaultValue: 25,
  },
  {
    key: 'callStopLossStrikePrice',
    label: 'Call StopLoss StrikePrice',
    type: 'number',
    required: true,
    defaultValue: 0,
  },
  {
    key: 'putStopLossStrikePrice',
    label: 'Put StopLoss StrikePrice',
    type: 'number',
    required: true,
    defaultValue: 0,
  },
  {
    key: 'callStopLossPercentage',
    label: 'Call StopLoss %',
    type: 'number',
    required: true,
    defaultValue: 35,
  },
  {
    key: 'putStopLossPercentage',
    label: 'Put StopLoss %',
    type: 'number',
    required: true,
    defaultValue: 35,
  },
  {
    key: 'callStopLossPremium',
    label: 'Call StopLoss Premium',
    type: 'number',
    required: true,
    defaultValue: 0,
  },
  {
    key: 'putStopLossPremium',
    label: 'Put StopLoss Premium',
    type: 'number',
    required: true,
    defaultValue: 0,
  },
  {
    key: 'bufferStopLossForStrikePrice',
    label: 'Buffer StopLoss For StrikePrice',
    type: 'number',
    required: true,
    defaultValue: 0,
  },
  {
    key: 'maxDiffAdjustmentPercentage',
    label: 'Max Diff Adj %',
    type: 'number',
    required: true,
    defaultValue: 50,
  },
  {
    key: 'targetPercentage',
    label: 'Target %',
    type: 'number',
    required: true,
    defaultValue: 0,
  },
  {
    key: 'dailyStartTime',
    label: 'dailyStartTime',
    type: 'text',
    required: true,
    defaultValue: '10:00',
  },
];
