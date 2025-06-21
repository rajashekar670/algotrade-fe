import { OptionTypeEnum } from '../constants/enums';
import { FormFieldConfig, FormSchema } from '../models/form-schema.model';
import { ShortStraddleFields } from './short-straddle-fields.config';
import { StrategyFormCommonFields } from './strategy-fields.config';

const BasicFields: FormFieldConfig[] = StrategyFormCommonFields.map((f) => {
  if (f.key === 'segment') {
    return { ...f, defaultValue: 'OPTIONS', editable: false, visible: false };
  } else if (f.key === 'optionType') {
    return {
      ...f,
      defaultValue: OptionTypeEnum.Sell,
      editable: false,
      visible: false,
    };
  }
  return f;
});



export const ShortStraddleFormSchema: FormSchema = {
  sections: [
    {
      title: 'Basic Details',
      fields: [...BasicFields],
    },
    {
      title: 'Adjustment',
      fields: [...ShortStraddleFields],
    },
  ],
};
