import { useState, useEffect } from "react";

export const useCodes = () => {
  const [codes, setCodes] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/services/codes.json");
      const data = await response.json();
      setCodes(data.codes);
    };
    fetchData();
  }, []);

  return { codes };
};
