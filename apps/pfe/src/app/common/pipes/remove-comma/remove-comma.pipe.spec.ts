import { RemoveCommaPipe } from './remove-comma.pipe';

describe('RemovecommaPipe', () => {
  const removeCommaPipe = new RemoveCommaPipe();
  const amountStr = '25,00,000.00';
  const emptyStr = '';

  it('create an instance', () => {
    expect(removeCommaPipe).toBeTruthy();
  });

  it('comma should be removed', () => {
    expect(removeCommaPipe.transform(amountStr)).toBe('2500000.00');
  });

  it('Test with empty string should be null', () => {
    expect(removeCommaPipe.transform(emptyStr)).toBe(null);
  });
});
