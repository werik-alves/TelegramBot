"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import api from "@/services/api/produtos";

type TopicKey = "amazon" | "shopee" | "magazine" | "infoprodutos";

export function CardWithForm() {
  const [preco, setPreco] = useState("");
  const [topic, setTopic] = useState<TopicKey | "">("");


  const handlePrecoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let valor = e.target.value.replace(/[^\d,]/g, "");
    const partes = valor.split(",");
    if (partes.length > 2) {
      valor = partes[0] + "," + partes[1];
    }
    setPreco(valor);
  };

  const formatarPreco = (valor: string) => {
    if (!valor) return "";
    const [inteiro, decimal] = valor.split(",");
    const inteiroFormatado = parseInt(inteiro || "0").toLocaleString("pt-BR");
    return decimal !== undefined
      ? `${inteiroFormatado},${decimal}`
      : inteiroFormatado;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const link = form.link.value;
    const descricao = form.descricao.value;

    const precoNumerico = Number(preco.replace(/\./g, "").replace(",", "."));

    if (!topic) {
      alert("Selecione uma loja!");
      return;
    }

    try {
      await api.sendProduto(topic, link, descricao, precoNumerico.toString());
      alert("Produto enviado com sucesso!");
    } catch (error) {
      alert("Erro ao enviar produto.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#F9EEE0]">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle className="text-2xl">Informações do produto</CardTitle>
          <CardDescription>
            Aqui é as informações do produto que você quer cadastrar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="link">Link do Produto</Label>
                <Input id="link" name="link" type="url" placeholder="Link do Produto" required />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="descricao">Descrição do Produto</Label>
                <Textarea id="descricao" name="descricao" placeholder="Descrição do Produto" />
              </div>
              <div>
                <Label htmlFor="preco">Preço</Label>
                <Input
                  className="w-1/2"
                  id="preco"
                  name="preco"
                  inputMode="decimal"
                  placeholder="Preço do Produto"
                  value={formatarPreco(preco)}
                  onChange={handlePrecoChange}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="topic">Lojas</Label>
                <Select onValueChange={(value: TopicKey) => setTopic(value)} value={topic}>
                  <SelectTrigger id="topic">
                    <SelectValue placeholder="Selecionar" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="shopee">Shopee</SelectItem>
                    <SelectItem value="magazine">Magazine Luiza</SelectItem>
                    <SelectItem value="infoprodutos">Info Produtos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <CardFooter className="flex justify-between pt-6">
                <Button variant="outline" type="button">
                  Sair
                </Button>
                <Button type="submit">Enviar Produto</Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default function CardPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <CardWithForm />
    </div>
  );
}
