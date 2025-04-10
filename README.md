# 🚀 CyberAuth Utils v1.0.0

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

## License

MIT