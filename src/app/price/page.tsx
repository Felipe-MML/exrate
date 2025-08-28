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

import { usePrice } from "@/hooks/usePrice";
import { useConversionsFilter } from "@/hooks/useConversionsFilter";
import codes from "@/services/codes.json";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { conversionSchema, Conversion } from "@/schemas/conversion.schema";
import { useState } from "react";

const Price = () => {
  const [convertedValue, setConvertedValue] = useState<number | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<Conversion>({
    resolver: zodResolver(conversionSchema),
  });

  const from = watch("from");
  const to = watch("to");
  const value = watch("value");

  const { price } = usePrice(from, to);
  const { filteredConversions } = useConversionsFilter(from);

  const onSubmit = (data: Conversion) => {
    if (price) {
      const key = Object.keys(price)[0] as string;
      setConvertedValue(
        (data.value *
          (parseFloat(price[key].ask) + parseFloat(price[key].bid))) /
          2
      );
    }
  };

  return (
    <div className="flex flex-col items-center mt-50 max-lg:mt-20">
      <h2 className="text-mainText text-2xl font-bold">Conversor</h2>
      <p className="text-mainText ">Selecione a moeda que deseja converter</p>

      <form className="flex flex-col mt-2" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between mb-5">
          <label className="flex flex-col text-mainText">
            Valor:
            <input
              type="number"
              {...register("value", { valueAsNumber: true })}
              className="border border-borders rounded-2xl px-2 py-1 w-25 focus:border-contrast shadow-lg"
            />
            {errors.value && (
              <span className="text-red-500 text-sm">
                {errors.value.message}
              </span>
            )}
          </label>
          <label className="flex flex-col text-mainText">
            Convertido:
            <input
              type="number"
              className="border border-borders rounded-2xl px-2 py-1 w-25 focus:border-contrast shadow-lg"
              value={convertedValue?.toFixed(2) || ""}
              readOnly
            />
          </label>
        </div>

        <div className="flex gap-10 max-lg:flex-col">
          <div>
            <Select
              onValueChange={(val) => {
                setValue("from", val, { shouldValidate: true });
                setValue("to", "", { shouldValidate: true });
                setConvertedValue(null);
              }}
              value={from}
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
            {errors.from && (
              <span className="text-red-500 text-sm">
                {errors.from.message}
              </span>
            )}
          </div>

          <p className="max-lg:self-center">Para</p>

          <div>
            <Select
              onValueChange={(val) =>
                setValue("to", val, { shouldValidate: true })
              }
              value={to}
            >
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
            {errors.to && (
              <span className="text-red-500 text-sm">{errors.to.message}</span>
            )}
          </div>
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
