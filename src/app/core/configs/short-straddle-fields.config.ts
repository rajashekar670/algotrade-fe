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
    visibleIf: "adjustmentType == 'STRADDLE'",
    requiredIf: "adjustmentType == 'STRADDLE'",
  },
  {
    key: 'callStopLossStrikePrice',
    label: 'Call StopLoss StrikePrice',
    type: 'number',
    defaultValue: 0,
    visible: ['edit','view']
  },
  {
    key: 'putStopLossStrikePrice',
    label: 'Put StopLoss StrikePrice',
    type: 'number',
    defaultValue: 0,
    visible: ['edit','view']
  },
  {
    key: 'callStopLossPercentage',
    label: 'Call StopLoss %',
    type: 'number',
    required: true,
    defaultValue: 35,
    visibleIf: "adjustmentType == 'STOPLOSS'",
    requiredIf: "adjustmentType == 'STOPLOSS'",
  },
  {
    key: 'putStopLossPercentage',
    label: 'Put StopLoss %',
    type: 'number',
    required: true,
    defaultValue: 35,
    visibleIf: "adjustmentType == 'STOPLOSS'",
    requiredIf: "adjustmentType == 'STOPLOSS'",
  },
  {
    key: 'callStopLossPremium',
    label: 'Call StopLoss Premium',
    type: 'number',
    required: true,
    defaultValue: 0,
    visibleIf: "adjustmentType == 'STOPLOSS'",
    requiredIf: "adjustmentType == 'STOPLOSS'",
  },
  {
    key: 'putStopLossPremium',
    label: 'Put StopLoss Premium',
    type: 'number',
    required: true,
    defaultValue: 0,
    visibleIf: "adjustmentType == 'STOPLOSS'",
    requiredIf: "adjustmentType == 'STOPLOSS'",
  },
  {
    key: 'bufferStopLossForStrikePrice',
    label: 'Buffer StopLoss For StrikePrice',
    type: 'number',
    required: true,
    defaultValue: 0,
    visible:[]
  },
  {
    key: 'maxDiffAdjustmentPercentage',
    label: 'Max Diff Adj %',
    type: 'number',
    required: true,
    defaultValue: 50,
    visibleIf: "adjustmentType == 'STRADDLE'",
    requiredIf: "adjustmentType == 'STRADDLE'",
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
