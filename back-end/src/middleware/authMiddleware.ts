import { Request, Response, NextFunction } from "express";
import { verificarToken } from "../services/auth";

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ error: "Token de autenticação ausente." });
  }

  try {
    const decoded = verificarToken(token);
    (req as any).usuario = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token de autenticação inválido." });
  }
}
