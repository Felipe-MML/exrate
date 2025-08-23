import { getPrice } from "../services/price.services";

import { useState, useEffect } from "react";

export function usePrice(from: string, to: string) {
  const [price, setPrice] = useState<number | null>(null);

  useEffect(() => {
    const fetchPrice = async () => {
      const response = await getPrice(from, to);
      setPrice(response);
    };

    fetchPrice();
  }, [from, to]);

  return { price };
}
