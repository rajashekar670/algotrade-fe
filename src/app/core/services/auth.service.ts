import { API_ENDPOINTS } from '../constants/api-endpoints';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import {
  AuthResponse,
  LoginRequest,
  RegisterRequest,
} from '../models/auth.model';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  private platformId = inject(PLATFORM_ID);

  login(payload: LoginRequest): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${API_ENDPOINTS.AUTH.LOGIN}`, payload)
      .pipe(
        tap((response) => {
          localStorage.setItem('token', response.token);
        })
      );
  }

  register(payload: RegisterRequest): Observable<any> {
    return this.http
      .post<AuthResponse>(`${API_ENDPOINTS.AUTH.REGISTER}`, payload)
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
    }
  }

  getToken(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem('token');
    } else {
      return null;
    }
  }

  getAuthStatus(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      if (localStorage.getItem('token')) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  }
}
