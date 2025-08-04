import { MODE } from "../constants/app";
import { DropdownOption } from "./drop-down-option.model";

export interface FormFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'select' | 'number' | 'checkbox' | 'boolean' | 'datetime-local';
  required?: boolean;
  requiredIf?: string;
  editable?: boolean;
  visible?: MODE[];
  visibleIf?: string;
  options?: DropdownOption[]; // ← inline select options
  optionsEndpoint?: string;
  dependsOn?: string;
  validators?: { type: 'minLength' | 'maxLength' | 'pattern' | 'minValue', value: any }[];
  defaultValue?: string | boolean | number | any[];
}

export interface FormSectionConfig {
  title: string;
  fields: FormFieldConfig[];
}

export interface FormSchema {
  sections: FormSectionConfig[];
}
