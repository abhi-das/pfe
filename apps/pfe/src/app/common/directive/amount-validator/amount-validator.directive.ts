import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';
import { amountRegex } from '../../../utils/validation-rules';

@Directive({
  selector: '[pfeAmountValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AmountValidatorDirective,
      multi: true,
    },
  ],
})
export class AmountValidatorDirective implements Validator {
  regEx = new RegExp(amountRegex, 'i');

  // Get the field and run the reg-ex test
  validate(field: AbstractControl): { [key: string]: any } | null {
    if (field.value && !this.regEx.test(field.value)) {
      return { amountInvalid: true };
    }
    return null;
  }
}
