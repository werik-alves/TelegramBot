"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";
//import para fazer a navegação
import { useRouter } from "next/navigation";
export function LoginPage() {
  const Router = useRouter();
  const handlerEntrar = () => {
    Router.push("/home");
  };
  return (
    <div className="flex h-screen w-full">
      {/* Lado esquerdo com imagem em tela cheia */}
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
            <Label htmlFor="email">Login:</Label>
            <Input type="email" id="email" placeholder="Email" />
          </div>
          <div className="grid w-full gap-2">
            <Label htmlFor="password">Senha:</Label>
            <Input type="password" id="password" placeholder="Senha" />
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
