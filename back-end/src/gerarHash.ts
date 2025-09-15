import bcrypt from "bcrypt";
import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
if (!supabaseUrl || !supabaseKey) {
  throw new Error(
    "Supabase URL or Key is not defined in the environment variables."
  );
}
const supabase = createClient(supabaseUrl, supabaseKey);

const novoUser = {
  user: "teste123",
  senha: "teste123",
};

async function registrarUsuario() {
  const saltRounds = 10;
  const password_hash = await bcrypt.hash(novoUser.senha, saltRounds);

  const { data, error } = await supabase.from("user").insert([
    {
      usuario: novoUser.user,
      password_hash: password_hash,
    },
  ]);

  if (error) {
    console.error("Erro ao inserir no Supabase:", error);
    return;
  }

  console.log("Usuário registrado com sucesso:", data);
}

registrarUsuario();
