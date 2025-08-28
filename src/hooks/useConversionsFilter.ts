import { useMemo } from "react";

import conversions from "@/services/conversions.json";
import codes from "@/services/codes.json";

type Code = keyof typeof codes.codes;

export const useConversionsFilter = (code: string) => {
  const filteredConversions = useMemo(() => {
    if (!code) return [];

    const conversionsKeys = Object.keys(conversions.conversions);

    const validConversions = conversionsKeys
      .filter((key) => key.startsWith(`${code}-`) || key.endsWith(`-${code}`))
      .map((key) => {
        const [from, to] = key.split("-");
        return from === code ? to : from;
      });

    return Array.from(new Set(validConversions)).map((code) => ({
      code,
      name: codes.codes[code as Code],
    }));
  }, [code]);

  return { filteredConversions };
};
