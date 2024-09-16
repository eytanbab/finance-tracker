import { expect, test } from 'bun:test';

import {
  convertAmountFromMiliunits,
  convertAmountToMiliunits,
} from '@/lib/utils';

test('should convert positive amount from miliunites correctly', () => {
  expect(convertAmountFromMiliunits(3000)).toBe(3);
});

test('should convert negative amount from miliunites correctly', () => {
  expect(convertAmountFromMiliunits(-3000)).toBe(-3);
});

test('should convert positive amount to miliunites correctly', () => {
  expect(convertAmountToMiliunits(2)).toBe(2000);
});

test('should convert neagtive amount to miliunites correctly', () => {
  expect(convertAmountToMiliunits(-2)).toBe(-2000);
});
