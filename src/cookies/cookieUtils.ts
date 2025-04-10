import { serialize, parse } from 'cookie';

interface CookieOptions {
  maxAgeSeconds?: number;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'lax' | 'strict' | 'none';
}

/**
 * Creates a Set-Cookie header string with secure defaults.
 *
 * @param name - Name of the cookie.
 * @param value - Value of the cookie.
 * @param options - Optional configuration for the cookie.
 * @returns A formatted Set-Cookie header string.
 */

export function setSecureCookie(
  name: string,
  value: string,
  options: CookieOptions = {}
): string {
  const {
    maxAgeSeconds = 3600,
    path = '/',
    secure = true,
    httpOnly = true,
    sameSite = 'lax',
  } = options;

  return serialize(name, value, {
    maxAge: maxAgeSeconds,
    path,
    secure,
    httpOnly,
    sameSite,
  });
}

/**
 * Parses a Cookie header string into an object.
 * Filters out any undefined values for strict type safety.
 *
 * @param cookieHeader - The raw cookie header string.
 * @returns An object with cookie name-value pairs.
 */

export function parseCookies(cookieHeader: string): Record<string, string> {
  const rawCookies = parse(cookieHeader || '');
  const cleanCookies: Record<string, string> = {};

  for (const [key, value] of Object.entries(rawCookies)) {
    if (value !== undefined) {
      cleanCookies[key] = value;
    }
  }

  return cleanCookies;
}
