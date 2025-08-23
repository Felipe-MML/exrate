import { getPrice } from "../services/price.services";

import { PriceResponse } from "@/types/price";

import { useState, useEffect } from "react";

export function usePrice(
  from: string,
  to: string
): { price: PriceResponse | null } {
  const [price, setPrice] = useState<PriceResponse | null>(null);

  useEffect(() => {
    if (from && to) {
      const fetchPrice = async () => {
        const response = await getPrice(from, to);
        setPrice(response);
      };

      fetchPrice();
    }
  }, [from, to]);

  return { price };
}
