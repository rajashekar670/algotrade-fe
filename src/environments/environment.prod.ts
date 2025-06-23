export const environment = {
  production: true,
  apiUrl: typeof window === 'undefined' ? 'http://localhost:9000/api' : '/api' // your live backend
};
