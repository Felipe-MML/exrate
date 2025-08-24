import api from "./api";

export const getPrice = async (from: string, to: string) => {
  try {
    const response = await api.get(`${from}-${to}`);
    return response.data;
  } catch (error: any) {
    if (error.response?.status == 404) {
      const response = await api.get(`${to}-${from}`);
      return response.data;
    }

    throw error;
  }
};
