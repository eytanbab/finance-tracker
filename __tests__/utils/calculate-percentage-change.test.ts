import { calculatePercentageChange } from '@/lib/utils';
import { expect, test } from 'bun:test';

test('should calculate positive percentage change correctly', () => {
  expect(calculatePercentageChange(100, 50)).toBe(100);
});

test('should calculate negative percentage change correctly', () => {
  expect(calculatePercentageChange(50, 100)).toBe(-50);
});

test('should calculate percentage change correctly if the previous number was zero', () => {
  expect(calculatePercentageChange(50, 0)).toBe(100);
});

test('should calculate percentage change correctly if the current and previous numbers were zero', () => {
  expect(calculatePercentageChange(0, 0)).toBe(0);
});

test('should calculate percentage change correctly if the current and previous numbers are the same', () => {
  expect(calculatePercentageChange(100, 100)).toBe(0);
});
