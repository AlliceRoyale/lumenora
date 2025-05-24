import { sum, multiply, divide } from '../src/math';

describe('math functions', () => {
  test('sum adds numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('multiply multiplies numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('divide divides numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divide by zero throws', () => {
    expect(() => divide(2, 0)).toThrow();
  });
});
