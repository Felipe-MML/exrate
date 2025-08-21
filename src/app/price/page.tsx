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

const Price = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-mainText text-2xl font-bold">Conversor</h2>
      <p className="text-mainText ">Selecione a moeda que deseja converter</p>

      <form className="flex flex-col mt-5">
        <div className="flex gap-10">
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selecione a moeda" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Moedas</SelectLabel>
                <SelectItem value="USD">Dólar americano</SelectItem>
                <SelectItem value="BRL">Real brasileiro</SelectItem>
                <SelectItem value="EUR">Euro</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <p>Para</p>
          <Select>
            <SelectTrigger className="w-[280px]">
              <SelectValue placeholder="Selecione a moeda" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Moedas</SelectLabel>
                <SelectItem value="USD">Dólar americano</SelectItem>
                <SelectItem value="BRL">Real brasileiro</SelectItem>
                <SelectItem value="EUR">Euro</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <input
          type="submit"
          value="Converter"
          className="bg-primarybuttons w-25 p-1 text-background rounded-3xl mt-5 hover:bg-hoverbuttons transition-colors duration-100 self-center hover:cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Price;
