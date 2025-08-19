import { API_ENDPOINTS } from '../constants/api-endpoints';
import {
  OPTION_TYPE_OPTIONS,
  STRATEGY_EXPIRY_OPTIONS,
} from '../constants/dropdowns';
import { FormFieldConfig } from '../models/form-schema.model';

export const StrategyFormCommonFields: FormFieldConfig[] = [
  {
    key: 'id',
    label: 'Id',
    type: 'text',
    required: true,
  },
  {
    key: 'instrument',
    label: 'Instrument',
    type: 'select',
    required: true,
    optionsEndpoint: API_ENDPOINTS.INSTRUMENT.GET_ALL,
    optionsMap: { label: 'name', value: 'name' },
  },
  {
    key: 'expiryDate',
    label: 'Expiry Date',
    type: 'select',
    required: true,
    optionsEndpoint: API_ENDPOINTS.INSTRUMENT.EXPIRY_DATES,
    dependsOn: 'instrument',
    optionsMap: { label: 'expiryDate', value: 'expiryDate' },
  },
  {
    key: 'quantity',
    label: 'Quantity',
    type: 'number',
    required: true,
    defaultValue: 1,
    validators: [
      {
        type: 'minValue',
        value: '1',
      },
    ],
  },
  {
    key: 'segment',
    label: 'Segment',
    type: 'text',
    required: true,
  },
  {
    key: 'frequency',
    label: 'Frequency',
    type: 'number',
    required: true,
    defaultValue: 10,
    validators: [
      {
        type: 'minValue',
        value: '1',
      },
    ],
  },
  {
    key: 'label',
    label: 'Notes',
    type: 'text',
  },
  {
    key: 'broker',
    label: 'Broker',
    type: 'select',
    required: true,
    optionsEndpoint: API_ENDPOINTS.BROKER.GET_ALL,
    optionsMap: { label: 'broker', value: 'id' },
  },
  {
    key: 'expiry',
    label: 'Expiry',
    type: 'select',
    required: true,
    options: STRATEGY_EXPIRY_OPTIONS,
  },
  {
    key: 'optionType',
    label: 'Option Type',
    type: 'select',
    required: true,
    options: OPTION_TYPE_OPTIONS,
    visible: [],
  },
  {
    key: 'startTime',
    label: 'Start Time',
    type: 'datetime-local',
    required: true,
    defaultValue: [10, 30],
  },
  {
    key: 'endTime',
    label: 'End Time',
    type: 'datetime-local',
    required: true,
    defaultValue: [14, 0],
  },
  {
    key: 'target',
    label: 'Target',
    type: 'number',
    required: true,
    defaultValue: 0,
  },
  {
    key: 'pl',
    label: 'Profit Loss',
    type: 'number',
    required: true,
    defaultValue: 0,
    visible: ['view'],
  },
  {
    key: 'logsEnabled',
    label: 'Logs',
    type: 'boolean',
    required: true,
    defaultValue: true,
  },
  {
    key: 'paperTrade',
    label: 'Paper Trade',
    type: 'boolean',
    required: true,
    defaultValue: false,
  },
];
