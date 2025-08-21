import api from "./api";

export const getPrice = async (from: string, to: string) => {
  const response = await api.get(`${from}-${to}`);
  return response.data;
};
