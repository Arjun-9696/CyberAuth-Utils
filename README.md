# 🚀 CyberAuth Utils v0.0.1

A lightweight package for secure authentication utilities.
## 🔐 Features

- Password hashing and verification
- JWT generation and validation
- OAuth helpers for React/Next.js
- Secure cookie management

## 📦 Package Setup:
- TypeScript support with strict types
- Proper `tsconfig.json` and `tsup.config.ts` for builds
- MIT License included
- Clean `.gitignore` and organized file structure
- Readable `README.md` with professional formatting

## 🧪 Testing:
- Manual testing script (`tests/hash.test.ts`) to verify all core utilities
- Output logs added for confirmation

## 🛠️ Ready for publishing on npm with name `cyberauth-utils`.

## Installation

```bash
npm install cyberauth-utils
```

## Usage

```ts
import { hashPassword } from 'cyberauth-utils';

const password = 'mySecurePassword123!';
const hashedPassword = await hashPassword(password);

console.log('Hashed Password:', hashedPassword);
```
```ts
import { generateJWT } from 'cyberauth-utils';

const payload = { userId: '123', role: 'admin' };
const secret = 'my_super_secret_key';
const token = generateJWT(payload, secret, { expiresIn: '2h' });

console.log('JWT Token:', token);
```
```ts
import { verifyJWT } from 'cyberauth-utils';

const payload = verifyJWT(token, 'my_super_secret_key');

if (payload) {
  console.log('Decoded Payload:', payload);
} else {
  console.log('Invalid token');
}
```
```ts
import { setSecureCookie } from 'cyberauth-utils';

const cookie = setSecureCookie('authToken', 'xyz123token', {
  maxAgeSeconds: 3600,
  path: '/',
  httpOnly: true,
  secure: true,
  sameSite: 'lax',
});

console.log('Set-Cookie Header:', cookie);
```
```ts
import { parseCookies } from 'cyberauth-utils';

const cookieHeader = 'authToken=xyz123token; theme=dark';
const cookies = parseCookies(cookieHeader);

console.log('Parsed Cookies:', cookies);
// Output: { authToken: 'xyz123token', theme: 'dark' }
```

## License

MIT