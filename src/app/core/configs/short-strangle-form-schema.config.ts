import { OptionTypeEnum } from '../constants/enums';
import { FormFieldConfig, FormSchema } from '../models/form-schema.model';
import { ShortStraddleFields } from './short-straddle-fields.config';
import { ShortStrangleFields } from './short-strangle-fields.config';
import { StrategyFormCommonFields } from './strategy-fields.config';

const BasicFields: FormFieldConfig[] = StrategyFormCommonFields.map((f) => {
  if (f.key === 'segment') {
    return { ...f, defaultValue: 'OPTIONS', editable: false, visible: []};
  } else if (f.key === 'optionType') {
    return {
      ...f,
      defaultValue: OptionTypeEnum.Sell,
      editable: false
    };
  } else if(f.key === 'startTime') {
    return {
      ...f,
      defaultValue:[9,30]
    }
  } else if(f.key === 'endTime') {
    return {
      ...f,
      defaultValue:[15,0]
    }
  }
  return f;
});



export const ShortStrangleFormSchema: FormSchema = {
  sections: [
    {
      title: 'Basic Details',
      fields: [...BasicFields],
    },
    {
      title: 'Adjustment',
      fields: [...ShortStrangleFields],
    },
  ],
};
