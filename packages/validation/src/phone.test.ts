import { describe, expect, it } from 'vitest';
import { normalizePhone, phoneSchema } from './phone';

// Örnekler backend'deki phone.spec.ts ile aynı.
describe('normalizePhone', () => {
  it.each([
    ['+90 532 123 45 67', '+905321234567'],
    ['0532 123 4567', '+905321234567'],
    ['5321234567', '+905321234567'],
    ['(0532) 123-45-67', '+905321234567'],
    ['00905321234567', '+905321234567'],
    ['905321234567', '+905321234567'],
    ['0212 555 12 34', '+902125551234'],
  ])('%s → %s', (input, expected) => {
    expect(normalizePhone(input)).toBe(expected);
  });

  it.each(['', '123', '+49 151 12345678', '0632 123 4567', '0532 123 456', '0532 123 45678', '05321234567x'])('%s reddedilir', (input) => {
    expect(normalizePhone(input)).toBeNull();
  });
});

describe('phoneSchema', () => {
  it('geçerli yazımı kabul eder, değeri değiştirmez', () => {
    expect(phoneSchema.parse(' 0532 123 45 67 ')).toBe('0532 123 45 67');
  });

  it('geçersizde sunucuyla aynı mesajı verir', () => {
    const r = phoneSchema.safeParse('0632 123 4567');
    expect(r.error?.issues[0].message).toBe('Geçerli bir Türkiye telefon numarası girin.');
  });
});
