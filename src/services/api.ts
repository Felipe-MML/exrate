import axios from "axios";

const api = axios.create({
  baseURL: "https://economia.awesomeapi.com.br/json/last/",
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
  },
});

export default api;
