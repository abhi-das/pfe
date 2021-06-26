import { FormControl } from '@angular/forms';
import { AmountValidatorDirective } from './amount-validator.directive';

describe('AmountValidatorDirective', () => {

  const amountDirective = new AmountValidatorDirective();
  it('should create an instance', () => {
    expect(amountDirective).toBeTruthy();
  });

  it("Invalid amount value", () => {
    const formControl = new FormControl("abc");
    const result = { 'amountInvalid': true };
    expect(amountDirective.validate(formControl)).toEqual(result);
  });

  it("valid amount value", () => {
    const formControl = new FormControl("12345");
    expect(amountDirective.validate(formControl)).toBeNull();
  });

});
