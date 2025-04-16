import jwt from "jsonwebtoken";
//criando a autenticação do usuario com cookies
import { Jwt } from "jsonwebtoken";
import dontenv from "dotenv";
dontenv.config();

const SECRET = process.env.JWT_SECRET;

export function gerarToken(payload: object): string {
  return jwt.sign(payload, SECRET!, { expiresIn: "1h" });
}

export function verificarToken(token: string) {
  return jwt.verify(token, SECRET!);
}
