# CyberAuth Utils

A lightweight package for secure authentication utilities.

## Features

- Password hashing and verification
- JWT generation and validation
- OAuth helpers for React/Next.js
- Secure cookie management

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