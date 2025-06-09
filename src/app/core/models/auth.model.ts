export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

export interface LoginError {
  email?: string;
  password?: string;
  error?: string;
}

export interface RegisterError {
  email?: string;
  password?: string;
  mobile?: string;
  error?: string;
}
