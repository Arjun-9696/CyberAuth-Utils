import bcrypt from "bcrypt";

export async function hashPassword(password: string, saltRounds = 12): Promise<string> {
  return await bcrypt.hash(password, saltRounds);
}