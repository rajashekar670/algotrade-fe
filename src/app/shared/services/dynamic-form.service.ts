import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import {
  InstrumentModel,
} from '../../core/models/api.response.model';
import { InstrumentService } from '../../core/services/instrument.service';
import { DropdownOption } from '../../core/models/drop-down-option.model';
import { FormFieldConfig } from '../../core/models/form-schema.model';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  constructor(
    private http: HttpClient,
  ) {}

  getFieldOptions(field: FormFieldConfig): DropdownOption[] {
    let options: DropdownOption[] = [];
    if (field.optionsEndpoint) {
      this.http.get<any[]>(field.optionsEndpoint).subscribe((opts: any[]) => {
        if (field.optionsMap) {
          opts.forEach((opt) =>
            options.push({
              label: opt[field.optionsMap!.label],
              value: opt[field.optionsMap!.value],
            })
          );
        }
      });
    }
    return options;
  }

  getDependentFieldOptions(
    field: FormFieldConfig,
    value: string
  ): DropdownOption[] {
    let options: DropdownOption[] = [];

    if (field.optionsEndpoint && value) {
      this.http
        .get<any[]>(
          field.optionsEndpoint.replace('{' + field.dependsOn + '}', value)
        )
        .subscribe((opts: any[]) => {
          if (field.optionsMap) {
            opts.forEach((opt) =>
              options.push({
                label: opt[field.optionsMap!.label],
                value: opt[field.optionsMap!.value],
              })
            );
          }
        });
    }
    return options;
  }

}
