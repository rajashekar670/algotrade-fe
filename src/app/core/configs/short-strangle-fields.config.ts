import { STRADDLE_ADJUSTMENT_OPTIONS, STRANGLE_ENTRY_TYPE_OPTIONS } from '../constants/dropdowns';
import { StraddleAdjustmentType } from '../constants/enums';
import { FormFieldConfig } from '../models/form-schema.model';

export const ShortStrangleFields: FormFieldConfig[] = [
  {
    key: 'entrySelectionType',
    label: 'Entry Type',
    type: 'select',
    options: STRANGLE_ENTRY_TYPE_OPTIONS,
    required: true,
  },
  {
    key: 'callStrikePrice',
    label: 'Call Strike Price',
    type: 'number',
    visibleIf: "entrySelectionType == 'STRIKEPRICE'",
    requiredIf: "entrySelectionType == 'STRIKEPRICE'",
  },
  {
    key: 'putStrikePrice',
    label: 'Put Strike Price',
    type: 'number',
    visibleIf: "entrySelectionType == 'STRIKEPRICE'",
    requiredIf: "entrySelectionType == 'STRIKEPRICE'",
  },
  {
    key: 'callPremium',
    label: 'Call Premium',
    type: 'number',
    visibleIf: "entrySelectionType == 'PREMIUM'",
    requiredIf: "entrySelectionType == 'PREMIUM'",
  },
  {
    key: 'putPremium',
    label: 'Put Premium',
    type: 'number',
    visibleIf: "entrySelectionType == 'PREMIUM'",
    requiredIf: "entrySelectionType == 'PREMIUM'",
  },
  {
    key: 'eodMaxDiffPercentage',
    label: 'EOD Max Diff %',
    type: 'number',
    required: true,
    defaultValue: 30
  },
  {
    key: 'adjustmentMaxDiffPercentage',
    label: 'Adjustment Max Diff %',
    type: 'number',
    required: true,
    defaultValue: 50
  },
  {
    key: 'minAdjustmentPercentage',
    label: 'Min Adjustment %',
    type: 'number',
    required: true,
    defaultValue: 80
  },
  {
    key: 'straddleAdjustmentType',
    label: 'Straddle Adjustment Type',
    type: 'select',
    options: STRADDLE_ADJUSTMENT_OPTIONS,
    required: true,
  },
  {
    key: 'stoplossUpdateDiffPercentage',
    label: 'Stoploss Update Diff %',
    type: 'number',
    required: true,
    defaultValue:5,
    visibleIf: "straddleAdjustmentType == 'STOPLOSS'",
    requiredIf: "straddleAdjustmentType == 'STOPLOSS'",
  },
  {
    key: 'stoplossUpdatePercentage',
    label: 'Stoploss Update %',
    type: 'number',
    required: true,
    defaultValue: 10,
    visibleIf: "straddleAdjustmentType == 'STOPLOSS'",
    requiredIf: "straddleAdjustmentType == 'STOPLOSS'",
  },
    {
    key: 'stoplossPremium',
    label: 'Stoploss Premium',
    type: 'number',
    visible: ['edit','view'],
  },
  {
    key: 'totalPremium',
    label: 'Total Premium',
    type: 'number',
    visible: ['edit','view']
  },
  {
    key: 'callStopLossStrikePrice',
    label: 'Call SL Strike Price',
    type: 'number',
    visible: ['edit','view']
  },
  {
    key: 'putStopLossStrikePrice',
    label: 'Put SL Strike Price',
    type: 'number',
    visible: ['edit','view']
  },
  {
    key: 'straddleAdjustmentPercentage',
    label: 'Straddle Adjustment %',
    type: 'number',
    defaultValue: 25,
    visibleIf: "straddleAdjustmentType == 'STRADDLE'",
    requiredIf: "straddleAdjustmentType == 'STRADDLE'",
  },
  {
    key: 'targetPercentage',
    label: 'Target %',
    type: 'number',
  },
  {
    key: 'dailyStartTime',
    label: 'Daily Start Time',
    type: 'text',
    required: true,
    defaultValue: '09:30'
  },
  {
    key: 'dailyEndTime',
    label: 'Daily End Time',
    type: 'text',
    required: true,
    defaultValue: '15:00'
  },
];
