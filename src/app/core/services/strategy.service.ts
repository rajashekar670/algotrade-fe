import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StrategyTypeEnum } from '../constants/enums';
import { API_ENDPOINTS } from '../constants/api-endpoints';

@Injectable({
  providedIn: 'root',
})
export class StrategyService {
  constructor(private http: HttpClient) {}

  createStrategy(strategy: string, form: any): Observable<unknown> {
    console.log(JSON.stringify(form));
    return this.http.post<any>(API_ENDPOINTS.STRATEGY.CREATE(strategy), form);
  }

  startStrategy(strategy: string): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.STRATEGY.START(strategy));
  }

  stopStrategy(id: string): Observable<any> {
    return this.http.get<void>(API_ENDPOINTS.STRATEGY.STOP(id));
  }

  deleteStrategy(id: string): Observable<any> {
    return this.http.delete<void>(API_ENDPOINTS.STRATEGY.DELETE(id));
  }

  getById(id: string): Observable<any> {
    return this.http.get<any>(API_ENDPOINTS.STRATEGY.GET_BY_ID(id));
  }

  getAll(search = '', status = '', page = 0, size = 10): Observable<any> {
    let params = new HttpParams()
      .set('search', search)
      .set('status', status)
      .set('page', page)
      .set('size', size);
    return this.http.get(API_ENDPOINTS.STRATEGY.GET_ALL, { params });
  }
}
