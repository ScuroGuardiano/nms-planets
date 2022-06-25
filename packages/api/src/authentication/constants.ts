import { randomBytes } from "crypto";

export const JWT_SECRET = process.env.JWT_SECRET ?? Buffer.from(randomBytes(32)).toString('base64');
