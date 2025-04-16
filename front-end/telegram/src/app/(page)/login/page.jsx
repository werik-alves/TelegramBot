"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginPage() {
  const router = useRouter();

  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  const handlerEntrar = async () => {
    try {
      const res = await fetch("http://localhost:8080/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha }),
        credentials: "include", // 🔥 precisa disso pro cookie ser aceito
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        router.push("/home");
      } else {
        alert(data.error || "Erro ao fazer login");
      }
    } catch (err) {
      console.error("Erro:", err);
      alert("Erro de conexão com o servidor");
    }
  };

  return (
    <div className="flex h-screen w-full">
      <div className="w-1/2 relative">
        <Image
          src="/images/produtos2.png"
          alt="Imagem dos produtos"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="w-1/2 flex items-center justify-center flex-col bg-[#F9EEE0]">
        <h1 className="text-3xl font-bold mb-6">Login</h1>
        <div className="flex flex-col items-center justify-center gap-6 rounded-lg bg-[#e4a84f88] p-8 shadow-md w-full max-w-sm">
          <div className="grid w-full gap-2">
            <Label htmlFor="usuario">Login:</Label>
            <Input
              type="text"
              id="usuario"
              placeholder="Usuário"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
            />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="senha">Senha:</Label>
            <Input
              type="password"
              id="senha"
              placeholder="Senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </div>
          <div className="grid w-full gap-2">
            <Button
              className="cursor-pointer hover:bg-[#585754]"
              onClick={handlerEntrar}
            >
              Entrar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
