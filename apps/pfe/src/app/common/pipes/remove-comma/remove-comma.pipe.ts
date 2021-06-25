import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removecomma'
})
export class RemoveCommaPipe implements PipeTransform {

  transform(value: (number | string | null)): (string | number | null) {
    // if value is not undefined or null replace comma with empty string
    if(value) {
      return value.toString().replace(/,/g, "");
    }
    return null;
  }
}
