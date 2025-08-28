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
import { useConversionsFilter } from "@/hooks/useConversionsFilter";

import codes from "@/services/codes.json";

const Price = () => {
  const [value, setValue] = useState<number | null>(null);
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");

  const { price } = usePrice(from, to);
  const { filteredConversions } = useConversionsFilter(from);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (value && price) {
      const key = Object.keys(price)[0] as string;
      setConvertedValue(
        (value * (parseFloat(price[key].ask) + parseFloat(price[key].bid))) / 2
      );
    }
  };

  return (
    <div className="flex flex-col items-center mt-50 max-lg:mt-20">
      <h2 className="text-mainText text-2xl font-bold">Conversor</h2>
      <p className="text-mainText ">Selecione a moeda que deseja converter</p>

      <form className="flex flex-col mt-2" onSubmit={handleSubmit}>
        <div className="flex justify-between mb-5">
          <label className="flex flex-col text-mainText">
            Valor:{" "}
            <input
              type="number"
              className="border border-borders rounded-2xl px-2 py-1 w-25 focus:border-contrast shadow-lg"
              onChange={(e) => setValue(parseFloat(e.target.value))}
            />
          </label>
          <label className="flex flex-col text-mainText">
            Convertido:{" "}
            <input
              type="number"
              className="border border-borders rounded-2xl px-2 py-1 w-25 focus:border-contrast shadow-lg"
              value={convertedValue || ""}
              readOnly
            />
          </label>
        </div>
        <div className="flex gap-10 max-lg:flex-col">
          <Select
            onValueChange={(e) => {
              setFrom(e);
              setTo("");
              setConvertedValue(null);
            }}
          >
            <SelectTrigger className="w-[280px] shadow-lg">
              <SelectValue placeholder="Selecione a moeda" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Moedas</SelectLabel>
                {Object.entries(codes.codes).map(([key, value]) => (
                  <SelectItem key={key} value={key}>
                    {key} - {value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <p className="max-lg:self-center">Para</p>

          <Select onValueChange={(e) => setTo(e)} value={to}>
            <SelectTrigger className="w-[280px] shadow-lg" disabled={!from}>
              <SelectValue placeholder="Selecione a moeda" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Moedas</SelectLabel>
                {filteredConversions.map(({ code, name }) => (
                  <SelectItem key={code} value={code}>
                    {name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <input
          type="submit"
          value="Converter"
          className="bg-primarybuttons w-25 p-2 text-contrast rounded-3xl mt-5 hover:bg-hoverbuttons transition-colors duration-100 self-center hover:cursor-pointer shadow-lg"
        />
      </form>
    </div>
  );
};

export default Price;
