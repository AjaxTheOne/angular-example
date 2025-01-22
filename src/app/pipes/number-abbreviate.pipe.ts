import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberAbbreviate'
})
export class NumberAbbreviatePipe implements PipeTransform {

  transform(value: number, declimalPlaces: number = 1): string {
    if (value === null || value === undefined) {
      return "";
    }
    
    if (value < 1_000) {
      return value.toString();
    } else if (value >= 1_000 && value < 1_000_000) {
      return (value / 1_000).toFixed(declimalPlaces) + "K";
    } else if (value >= 1_000_000 && value < 1_000_000_000) {
      return (value / 1_000_000).toFixed(declimalPlaces) + "M";
    } else {
      return (value / 1_000_000_000).toFixed(declimalPlaces) + "B";
    }
  }

}
