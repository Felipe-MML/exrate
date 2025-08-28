import { useMemo } from "react";

import conversions from "@/services/conversions.json";

export const useConversionsFilter = (codigo: string): any => {
  const filteredConversions = useMemo(() => {
    if (!codigo) return [];

    return Object.keys(conversions)
      .filter((key) => key.includes(codigo))
      .map((key) => {
        const [a, b] = key.split("-");
        return a === codigo ? b : a;
      });
  }, [codigo]);

  return filteredConversions;
};
