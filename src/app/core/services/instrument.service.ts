import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, of, shareReplay, throwError } from 'rxjs';
import { API_ENDPOINTS } from '../constants/api-endpoints';
import { InstrumentModel as InstrumentModel } from '../models/api.response.model';

@Injectable({
  providedIn: 'root',
})
export class InstrumentService {
  constructor(private http: HttpClient) {}

  private instruments$!: Observable<InstrumentModel[]>;

  getInstruments(): Observable<InstrumentModel[]> {
    if (!this.instruments$) {
      this.instruments$ = this.http
        .get<InstrumentModel[]>(API_ENDPOINTS.INSTRUMENT.GET_ALL)
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

  getAll(): Observable<InstrumentModel[]> {
    return this.http.get<InstrumentModel[]>(API_ENDPOINTS.INSTRUMENT.GET_ALL);
  }
}
