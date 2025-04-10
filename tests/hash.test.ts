import { describe, it, expect } from 'vitest';
import {
  hashPassword,
  verifyPassword,
  generateJWT,
  verifyJWT,
  setSecureCookie,
  parseCookies,
} from '../src';

describe('CyberAuth Utils', () => {
  it('should hash and verify password correctly', async () => {
    const password = 'secure123!';
    const hashed = await hashPassword(password);
    const isValid = await verifyPassword(password, hashed);
    expect(isValid).toBe(true);
  });

  it('should generate and verify JWT correctly', () => {
    const payload = { userId: 1 };
    const secret = 'my_secret';
    const token = generateJWT(payload, secret, { expiresIn: '1h' });
    const verified = verifyJWT(token, secret);
    expect(verified).toMatchObject(payload);
  });

  it('should set and parse secure cookies correctly', () => {
    const cookie = setSecureCookie('token', 'abc123');
    const parsed = parseCookies(cookie);
    expect(parsed.token).toBe('abc123');
  });
});
