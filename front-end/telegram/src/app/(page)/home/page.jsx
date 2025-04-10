"use client";
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

export function CardWithForm() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#F9EEE0] ">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle className="text-2xl">Informações do produto</CardTitle>
          <CardDescription>
            Aqui é as informações do produto que você quer cadastrar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="link">Link do Produto</Label>
                <Input id="link" type="url" placeholder="Link do Produto" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="descricao">Descrição do Produto</Label>
                <Textarea
                  id="descricao"
                  placeholder="Descrição do Produto"
                ></Textarea>
              </div>
              <div>
                <Label htmlFor="preco">Preço</Label>
                <Input
                  className="w-1/2"
                  id="preco"
                  placeholder="Preço do Produto"
                  type="number"
                  step="1.00"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="lojas">lojas</Label>
                <Select>
                  <SelectTrigger id="lojas">
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                  <SelectContent position="popper">
                    <SelectItem value="amazon">Amazon</SelectItem>
                    <SelectItem value="shopee">Shopee</SelectItem>
                    <SelectItem value="magazine">Magazine Luiza</SelectItem>
                    <SelectItem value="infoprodutos">Info Produtos</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="cursor-pointer">
            Sair
          </Button>
          <Button className="cursor-pointer">Enviar Produto</Button>
        </CardFooter>
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
