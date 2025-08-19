import { environment } from './../../../environments/environment';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${environment.apiUrl}/auth/login`,
    REGISTER: `${environment.apiUrl}/auth/register`,
  },
  STRATEGY: {
    GET_ALL: `${environment.apiUrl}/strategies`,
    GET_BY_ID: (id: string | number) => `${environment.apiUrl}/strategies/${id}`,
    CREATE : (name:string) => `${environment.apiUrl}/strategies/strategy/${name}`,
    UPDATE: (id: string | number) => `${environment.apiUrl}/strategies/${id}`,
    DELETE: (id: string | number) => `${environment.apiUrl}/strategies/${id}`,
    START: (id:string) => `${environment.apiUrl}/strategies/${id}/actions/start`,
    STOP: (id:string) => `${environment.apiUrl}/strategies/${id}/actions/stop`,
  },
  INSTRUMENT : {
    GET_ALL: `${environment.apiUrl}/instruments`,
    EXPIRY_DATES: `${environment.apiUrl}/instruments/{instrument}/expiryDates`
  },
  BROKER : {
    GET_ALL : `${environment.apiUrl}/brokers`
  }
};
