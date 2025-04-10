import jwt, { SignOptions } from 'jsonwebtoken';

interface JWTOptions extends SignOptions {}

export function generateJWT(
  payload: object,
  secret: string,
  options: JWTOptions = {}
): string {
  const defaultOptions: SignOptions = {
    expiresIn: '1h',
    ...options,
  };

  return jwt.sign(payload, secret, defaultOptions);
}
