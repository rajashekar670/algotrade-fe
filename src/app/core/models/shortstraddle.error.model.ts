import { StrategyErrorModel } from "./strategy.error.model";

export interface ShortStraddleErrorModel extends StrategyErrorModel {
  adjustmentType?: string;
  adjustmentPercentage?: string;
  callStopLossStrikePrice?: string;
  putStopLossStrikePrice?: string;
  callStopLossPercentage?: string;
  putStopLossPercentage?: string;
  callStopLossPremium?: string;
  putStopLossPremium?: string;
  bufferStopLossForStrikePrice?: string;
  maxDiffAdjustmentPercentage?: string;
  targetPercentage?: string;
  dailyStartTime?: string;
}
