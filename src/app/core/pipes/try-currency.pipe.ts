import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tryCurrency'
})
export class TryCurrencyPipe implements PipeTransform {
  transform(value: string): number {
    try {
        return parseFloat(value)?parseFloat(value):0;
    } catch (error) {
        return 0;
    }
  }
}