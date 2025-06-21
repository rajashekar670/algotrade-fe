import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, of, shareReplay, throwError } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { InstrumentResponseModel as InstrumentResponseModel } from '../models/api.response.model';

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  constructor(private http: HttpClient) {}

  private instruments$!: Observable<InstrumentResponseModel[]>;

  getInstruments(): Observable<InstrumentResponseModel[]> {
    if (!this.instruments$) {
      this.instruments$ = this.http
        .get<InstrumentResponseModel[]>(API_ENDPOINTS.INSTRUMENT.GET_ALL)
        .pipe(
          catchError((error) => {
            console.error('Failed to load instruments', error);
            return of([]); // fallback to empty array
          }),
          shareReplay(1)
        );
    }
    return this.instruments$;
  }
}
