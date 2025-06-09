import { environment } from './../../../environments/environment';

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: `${environment.apiUrl}/auth/login`,
    REGISTER: `${environment.apiUrl}/auth/register`,
  },
  STRATEGY: {
    GET_ALL: `${environment.apiUrl}/strategies`,
    GET_BY_ID: (id: string | number) => `${environment.apiUrl}/strategies/${id}`,
    CREATE: `${environment.apiUrl}/strategies`,
    UPDATE: (id: string | number) => `${environment.apiUrl}/strategies/${id}`,
    DELETE: (id: string | number) => `${environment.apiUrl}/strategies/${id}`
  },
  INSTRUMENT : {
    GET_ALL: `${environment.apiUrl}/instruments`
  }
};
