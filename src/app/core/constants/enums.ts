export enum StrategyStatus {
  New = 'NEW',
  Running = 'RUNNING',
  Completed = 'COMPLETED',
  Error = 'ERROR',
  Aborted = 'ABORTED',
  Scheduled = 'SCHEDULED'
}

export enum Expiry {
  Weekly = 'WEEKLY',
  Monthly = 'MONTHLY',
  NA = 'NA',
}

export enum StraddleAdjustmentType {
  Stoploss = 'STOPLOSS',
  Straddle = 'STRADDLE',
}

export enum StrategyTypeEnum {
  ShortStrangle = 'SHORT_STRANGLE',
  ShortStraddle = 'SHORT_STRADDLE'
}

export enum OptionTypeEnum {
  Buy = 'BUY',
  Sell = 'SELL',
  NA = "NA"
}
