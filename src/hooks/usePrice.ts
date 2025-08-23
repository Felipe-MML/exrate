import { getPrice } from "../services/price.services";

import { useState, useEffect, useRef } from "react";

export function usePrice(from: string, to: string) {
  const [price, setPrice] = useState<number | null>(null);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    const fetchPrice = async () => {
      const response = await getPrice(from, to);
      setPrice(response);
    };

    fetchPrice();
  }, [from, to]);

  return { price };
}
