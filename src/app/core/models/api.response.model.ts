export interface ExpiryDate {
  expiryDate?: string;
  weekly?: boolean;
}

export class Instrument {
  name?: string;
  expiryDates?: ExpiryDate[];
}
