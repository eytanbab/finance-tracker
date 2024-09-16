import { expect, test } from 'bun:test';

import { formatCurrency } from '@/lib/utils';

test('should convert positive currency correctly', () => {
  expect(formatCurrency(100)).toBe('$100.00');
});

test('should convert negative currency correctly', () => {
  expect(formatCurrency(-100)).toBe('-$100.00');
});

test('should convert zero currency correctly', () => {
  expect(formatCurrency(0)).toBe('$0.00');
});
