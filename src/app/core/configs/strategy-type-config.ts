import { StrategyTypeEnum } from "../constants/enums";

export interface StrategyTypeConfig {
  type: string;
  label: string;
  route: string;
}

export const STRATEGY_TYPES: StrategyTypeConfig[] = [
  {
    type: StrategyTypeEnum.ShortStraddle,
    label: 'Short Straddle',
    route: 'short-straddle',
  },
  {
    type: StrategyTypeEnum.ShortStrangle,
    label: 'Short Strangle',
    route: 'short-strangle',
  },
];

