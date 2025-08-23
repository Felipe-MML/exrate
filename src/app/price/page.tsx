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

import { useState } from "react";

import { usePrice } from "@/hooks/usePrice";

const Price = () => {
  const [value, setValue] = useState<number | null>(null);
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const { price } = usePrice(from, to);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value) {
      console.log(price);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-mainText text-2xl font-bold">Conversor</h2>
      <p className="text-mainText ">Selecione a moeda que deseja converter</p>

      <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
        <div className="flex justify-center mb-5">
          <label className="flex flex-col text-mainText">
            Valor:{" "}
            <input
              type="number"
              className="border border-borders rounded-2xl px-2 py-1 w-25 focus:border-contrast"
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
          </label>
        </div>
        <div className="flex gap-10 max-lg:flex-col">
          <Select onValueChange={(e) => setFrom(e)}>
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
          <p className="max-lg:self-center">Para</p>
          <Select onValueChange={(e) => setTo(e)}>
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

      {convertedValue && (
        <div className="">
          <p>{convertedValue}</p>
        </div>
      )}
    </div>
  );
};

export default Price;
