import {formatDate} from '@angular/common'

export function formatToIsoLocal(input: string): string | null {
  if (!input) return null;
  const [day, month, year, hour, minute] = input.match(/\d+/g)!.map(Number);
  const date = new Date(year, month - 1, day, hour, minute);
  return formatDate(date, "yyyy-MM-dd'T'HH:mm", 'en-US');
}
