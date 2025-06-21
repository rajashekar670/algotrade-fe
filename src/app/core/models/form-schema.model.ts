import { DropdownOption } from "./drop-down-option.model";

export interface FormFieldConfig {
  key: string;
  label: string;
  type: 'text' | 'select' | 'number' | 'checkbox' | 'boolean' | 'datetime-local';
  required?: boolean;
  editable?: boolean;
  visible?: boolean;
  visibleIf?: string;
  options?: DropdownOption[]; // ← inline select options
  optionsEndpoint?: string;
  dependsOn?: string;
  validators?: { type: 'minLength' | 'maxLength' | 'pattern' | 'minValue', value: any }[];
  defaultValue?: string | boolean | number;
}

export interface FormSectionConfig {
  title: string;
  fields: FormFieldConfig[];
}

export interface FormSchema {
  sections: FormSectionConfig[];
}
