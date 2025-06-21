export interface ExpiryDateResponseModel {
  expiryDate?: string;
  weekly?: boolean;
}

export interface InstrumentResponseModel {
  name?: string;
  expiryDates?: ExpiryDateResponseModel[];
}
