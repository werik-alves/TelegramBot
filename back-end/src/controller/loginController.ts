const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const supabase = require("../services/supabaseClient");
import { Request, Response } from "express";

require("dotenv").config();

interface LoginRequestBody {
  usuario: string;
  senha: string;
}

interface User {
  id: number;
  usuario: string;
  password_hash: string;
}

const login = async (
  req: Request<{}, {}, LoginRequestBody>,
  res: Response
): Promise<Response> => {
  const { usuario, senha } = req.body;

  if (!usuario || !senha) {
    return res.status(400).json({ error: "Usuário e senha são obrigatórios." });
  }

  const { data: users, error } = (await supabase
    .from("user")
    .select("*")
    .eq("usuario", usuario)
    .limit(1)) as { data: User[] | null; error: any };

  if (error) {
    return res.status(500).json({ error: "Erro ao buscar usuário." });
  }

  if (!users || users.length === 0) {
    return res.status(401).json({ error: "Usuário não encontrado." });
  }

  const user = users[0];
  const senhaCorreta = await bcrypt.compare(senha, user.password_hash);

  if (!senhaCorreta) {
    return res.status(401).json({ error: "Senha incorreta." });
  }

  const token = jwt.sign(
    { id: user.id, usuario: user.usuario },
    process.env.JWT_SECRET as string,
    { expiresIn: "8h" }
  );

  return res.status(200).json({
    message: "Login realizado com sucesso!",
    token,
    usuario: user.usuario,
  });
};

module.exports = { login };
