import jwt, { JwtPayload } from 'jsonwebtoken';

export function verifyJWT(token: string, secret: string): JwtPayload | null {
  try {
    const decoded = jwt.verify(token, secret);
    if (typeof decoded === 'string') {
      return null; 
    }
    return decoded;
  } catch (err) {
    return null;
  }
}
