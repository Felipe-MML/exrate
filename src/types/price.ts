export interface PriceResponse {
  [key: string]: {
    code: string;
    ask: number;
    bid: number;
    high: number;
    low: number;
    timestamp: number;
  };
}
