import { z } from "zod";

export const conversionSchema = z.object({
  value: z
    .number("Digite um número")
    .positive("O valor deve ser maior que zero"),
  from: z
    .string("Selecione uma das opções")
    .nonempty("Selecione a moeda de origem"),
  to: z
    .string("Selecione uma das opções")
    .nonempty("Selecione a moeda de destino"),
});

export type Conversion = z.infer<typeof conversionSchema>;
