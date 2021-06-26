import { amountRegex } from "./validation-rules";


describe('Test Validation Rules', () => {

  test('falsy string', () => {
    const amount = "abcd";
    const regex = new RegExp(amountRegex);
    expect(regex.test(amount)).toBeFalsy();
  });

  test('truthy string', () => {
    const amount = "2110";
    const regex = new RegExp(amountRegex);
    expect(regex.test(amount)).toBeTruthy()
  });

})
