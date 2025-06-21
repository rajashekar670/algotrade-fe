import { Component, Input, OnInit } from '@angular/core';
import {
  FormFieldConfig,
  FormSchema,
} from '../../../core/models/form-schema.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicFormService } from '../../services/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form.component',
  imports: [],
  templateUrl: './dynamic-form.component.html',
  styleUrl: './dynamic-form.component.scss',
})
export class DynamicFormComponent implements OnInit {
  @Input() schema!: FormSchema;
  @Input() mode: 'create' | 'edit' | 'view' = 'view';
  @Input() formData: any = {};

  form!: FormGroup;
  backendErrors: { [key: string]: string } = {};
  optionsMap: { [key: string]: any[] } = {};
  expiryOptions: string[] = [];

  constructor(private fb: FormBuilder, private dfs: DynamicFormService) {}

  ngOnInit(): void {
    this.buildForm();
    this.loadOptions();
    this.handleDependencies();
  }

  buildForm(): void {
    const group: any = {};
    this.schema.sections.forEach((section) => {
      section.fields.forEach((field) => {
        const value =
          this.formData[field.key] ??
          field.defaultValue ??
          this.defaultValue(field);
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

  handleDependencies() {
    const expiryField = this.findField('expiryDate');
    if (expiryField?.dependsOn === 'instrument') {
      const control = this.form.get('instrument');
      control?.valueChanges.subscribe((val) => {
        this.dfs
          .getExpiries(val)
          .subscribe((res: string[]) => (this.expiryOptions = res));
        this.form.get('expirydate')?.setValue('');
      });
      const initial = control?.value;
      if (initial) {
        this.dfs
          .getExpiries(initial)
          .subscribe((res: string[]) => (this.expiryOptions = res));
      }
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
  defaultValue(field: FormFieldConfig): any {
    throw new Error('Method not implemented.');
  }
}
