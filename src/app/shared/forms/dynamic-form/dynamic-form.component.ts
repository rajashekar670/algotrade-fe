import { DropdownOption } from './../../../core/models/drop-down-option.model';
import { CommonModule, formatDate } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormFieldConfig,
  FormSchema,
} from '../../../core/models/form-schema.model';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCard } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { formatToIsoLocal } from '../../../core/utils/date-util';

@Component({
  selector: 'app-dynamic-form',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatSlideToggleModule,
    MatCard,
    MatButtonModule,
  ],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() schema!: FormSchema;
  @Input() mode: 'create' | 'edit' | 'view' = 'view';
  @Input() formData: any = {};
  @Output() submitted = new EventEmitter<any>();

  form!: FormGroup;
  optionsMap: { [key: string]: DropdownOption[] } = {};

  @Input() set backendErrors(errors: Record<string, string>) {
    if (!errors) return;
    console.log('backend errors', errors);
    Object.entries(errors).forEach(([fieldKey, message]) => {
      const control = this.form.get(fieldKey);
      if (control) {
        control.setErrors({ backend: message });
        control.markAsTouched();
      }
    });
  }

  constructor(private fb: FormBuilder, private dfs: DynamicFormService) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadInstrumentOptions();
    this.loadOptions();
    this.setOptionsForViewMode();
    this.handleDependencies();
  }

  setOptionsForViewMode(): void {
    if (this.mode === 'view') {
      this.schema.sections.forEach((section) => {
        section.fields
          .filter((field) => field.type === 'select')
          .forEach((field) => {
            if (this.formData[field.key]) {
              this.optionsMap[field.key] = [
                {
                  label: this.formData[field.key],
                  value: this.formData[field.key],
                },
              ];
            }
          });
      });
    }
  }

  buildForm(): void {
    const group: any = {};
    this.schema.sections.forEach((section) => {
      section.fields.forEach((field) => {
        // const value1 =
        //   this.formData[field.key] ??
        //   field.defaultValue ??
        //   this.defaultValue(field);
        const value = this.getFieldValue(field);
        const validators = [];
        if (field.required) validators.push(Validators.required);
        if (field.validators) {
          field.validators.forEach((validator) => {
            if (validator.type === 'minLength')
              validators.push(Validators.minLength(validator.value));
            if (validator.type === 'maxLength')
              validators.push(Validators.maxLength(validator.value));
            if (validator.type === 'minValue')
              validators.push(Validators.min(validator.value));
            if (validator.type === 'pattern')
              validators.push(Validators.pattern(validator.value));
          });
        }
        group[field.key] = [
          { value, disabled: this.isReadOnly(field) },
          validators,
        ];
      });
    });
    this.form = this.fb.group(group);

    this.form.valueChanges.subscribe(() => {
      this.backendErrors = {};
    });
  }

  getFieldValue(
    field: FormFieldConfig
  ): string | boolean | null | undefined | number {
    let value;
    let dataValue = this.formData[field.key];
    if (this.mode === 'view') {
      if (field.type === 'select') {
        this.optionsMap[field.key] = [{ label: dataValue, value: dataValue }];
        value = dataValue;
      } else if (field.type === 'datetime-local') {
        value = formatToIsoLocal(dataValue);
      } else {
        value = dataValue;
      }
    } else if (this.mode === 'edit') {
      if (field.type === 'select') {
        value = dataValue;
      } else if (field.type === 'datetime-local') {
        value = formatToIsoLocal(dataValue);
      } else {
        value = dataValue;
      }
    } else {
      if (field.type === 'datetime-local') {
        if (Array.isArray(field.defaultValue)) {
          let [hour = 0, minute = 0, second = 0] = field.defaultValue;
          value = formatDate(
            new Date().setHours(hour, minute, second),
            "yyyy-MM-dd'T'HH:mm",
            'en-US'
          );
        }
      } else {
        value = field.defaultValue ?? this.defaultValue(field);
      }
    }
    return value;
  }

  loadOptions() {
    this.schema.sections.forEach((section) => {
      section.fields
        .filter(
          (field) =>
            field.type === 'select' && field.optionsEndpoint && !field.dependsOn
        )
        .forEach((field) => {
          this.dfs
            .getOptions(field.optionsEndpoint)
            .subscribe((opts: any[]) => {
              this.optionsMap[field.key] = opts;
            });
        });
    });
  }

  loadInstrumentOptions() {
    if (this.findField('instrument') && this.mode === 'create') {
      this.dfs.loadInstrumentOptions().subscribe((options) => {
        this.optionsMap['instrument'] = options;
        const selected = this.form.get('instrument')?.value;
        if (selected) {
          this.optionsMap['expiryDate'] =
            this.dfs.getExpiriesForInstrument(selected);
        }
      });
    }
  }

  handleDependencies() {
    const expiryField = this.findField('expiryDate');
    if (expiryField) {
      const control = this.form.get('instrument');
      control?.valueChanges.subscribe((val) => {
        this.optionsMap['expiryDate'] = this.dfs.getExpiriesForInstrument(val);
        this.form.get('expiryDate')?.setValue('');
      });
    }
  }

  findField(key: string): FormFieldConfig | undefined {
    for (const section of this.schema.sections) {
      const field = section.fields.find((f) => f.key === key);
      if (field) return field;
    }
    return undefined;
  }

  isReadOnly(field: FormFieldConfig): boolean {
    if (this.mode === 'view') return true;
    if (field.editable === false) return true;
    return false;
  }

  isVisible(field: FormFieldConfig): boolean {
    if (field.visible) {
      return field.visible.includes(this.mode);
    } else {
      return true;
    }
  }

  onSubmit() {
    // if (this.form.valid && this.mode !== 'view') {
    //   this.submitted.emit(this.form.getRawValue());
    // }
    this.submitted.emit(this.form.getRawValue());
  }

  defaultValue(field: FormFieldConfig): any {
    if (field.type === 'boolean') return false;
    return '';
  }

  getOptions(field: FormFieldConfig): DropdownOption[] {
    let options: DropdownOption[] = [];
    if (this.findField(field.key)) {
      if (this.optionsMap[field.key]?.length > 0) {
        options = this.optionsMap[field.key];
      } else {
        options = field.options ?? [];
      }
    }
    return options;
  }

  getValidationError(field: FormFieldConfig): string {
    let errorMessage = '';
    if (this.form.get(field.key)?.errors?.['min']) {
      errorMessage = `Min value is ${
        this.form.get(field.key)?.errors?.['min'].min
      }`;
    } else if (this.form.get(field.key)?.errors?.['max']) {
      errorMessage = `Max value is ${
        this.form.get(field.key)?.errors?.['max'].max
      }`;
    } else if (this.form.get(field.key)?.errors?.['minlength']) {
      errorMessage = `Min length is ${
        this.form.get(field.key)?.errors?.['minlength'].requiredLength
      }`;
    } else if (this.form.get(field.key)?.errors?.['maxlength']) {
      errorMessage = `Max length is ${
        this.form.get(field.key)?.errors?.['maxlength'].requiredLength
      }`;
    } else if (this.form.get(field.key)?.errors?.['email']) {
      errorMessage = 'Invalid format';
    } else if (this.form.get(field.key)?.errors?.['backend']) {
      errorMessage = this.form.get(field.key)?.errors?.['backend'];
    }
    return errorMessage;
  }
}
