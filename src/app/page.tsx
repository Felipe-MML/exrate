"use client";

import { getPrice } from "@/services/price.services";
import { useState, useEffect } from "react";

export default function Home() {
  const [price, setPrice] = useState(null);

  useEffect(() => {
    getPrice("EUR", "BRL").then((data) => {
      setPrice(data);
    });
  }, []);

  console.log(price);

  return <div></div>;
}
