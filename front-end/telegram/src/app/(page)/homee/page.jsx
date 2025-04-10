"use client";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const Home = () => {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Selecione uma loja" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Selecione uma loja</SelectLabel>
          <SelectItem value="apple">Amazon</SelectItem>
          <SelectItem value="banana">Shopee</SelectItem>
          <SelectItem value="blueberry">Magazine Luiza</SelectItem>
          <SelectItem value="grapes">Info Produtos</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default Home;
