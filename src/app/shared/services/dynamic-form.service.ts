import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DynamicFormService {

  constructor(private http: HttpClient) { }

  getOptions(endpoint: any) : Observable<any[]>{
    return this.http.get<any[]>(endpoint);
  }

  getExpiries(instrument: string) : Observable<string[]> {
    if(!instrument) return of([]);
    return of([]);
  }
}
