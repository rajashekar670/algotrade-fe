import { Injectable } from "@angular/core";
import { STRATEGY_TYPES, StrategyTypeConfig } from "../configs/strategy-type-config";

@Injectable({providedIn : 'root'})
export class StrategyTypeService {

  getAll(): StrategyTypeConfig[] {
    return STRATEGY_TYPES;
  }

  getByRoute(route: string | null): StrategyTypeConfig | undefined {
    return STRATEGY_TYPES.find(s => s.route === route);
  }

  getByLabel(label: string | null): StrategyTypeConfig | undefined {
    return STRATEGY_TYPES.find(s => s.label === label);
  }

  getByType(type: string | null): StrategyTypeConfig | undefined {
    return STRATEGY_TYPES.find(s => s.type === type);
  }

  getLabel(type: string): string {
    return this.getByType(type)?.label ?? type;
  }

}
