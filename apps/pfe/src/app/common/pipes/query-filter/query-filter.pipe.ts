import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'queryFilter'
})

export class QueryFilterPipe implements PipeTransform {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  transform(value: any, args?: any): any {
    if(!value) return null;
    if(!args) return value;
    args = args.trim().toLowerCase();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return value.filter( (val: any) => val.merchant.name.toLowerCase().includes(args.toLowerCase()));
  }
}
