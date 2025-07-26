export interface ExpiryDateModel {
  expiryDate?: string;
  weekly?: boolean;
}

export interface InstrumentModel {
  name?: string;
  expiryDates?: ExpiryDateModel[];
}
