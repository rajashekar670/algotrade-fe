import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';
import {
  ExpiryDateModel,
  InstrumentModel,
} from '../../core/models/api.response.model';
import { InstrumentService } from '../../core/services/instrument.service';
import { DropdownOption } from '../../core/models/drop-down-option.model';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  constructor(
    private http: HttpClient,
    private instrumentService: InstrumentService
  ) {}

  private instruments: InstrumentModel[] = [];

  getOptions(endpoint: any): Observable<any[]> {
    return this.http.get<any[]>(endpoint);
  }

  getExpiries(instrument: string): Observable<string[]> {
    if (!instrument) return of([]);
    return of([]);
  }

  loadInstrumentOptions(): Observable<DropdownOption<string>[]> {
    return this.instrumentService.getAll().pipe(
      tap((data) => (this.instruments = data)),
      map((data) =>
        data.map((i) => ({
          value: i.name!,
          label: i.name!,
        }))
      )
    );
  }

  getCachedInstruments(): InstrumentModel[] {
    return this.instruments;
  }

  getExpiriesForInstrument(instrument: string): DropdownOption[] {
    return (
      this.instruments
        .find((i) => i.name === instrument)
        ?.expiryDates?.map((date) => ({
          value: date.expiryDate!,
          label: date.expiryDate!,
        })) || []
    );
  }
}
