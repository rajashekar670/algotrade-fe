import { StrategyTypeEnum } from './enums';

export const ROUTES = {
  STRATEGIES: {
    GET_ALL: '/strategies',
    CREATE: '/strategies/create',
    GET_BY_ID: (id:string) => `/strategies/${id}`
  },
};

export type MODE=  'create' | 'edit' | 'view';
