export interface PriceResponse {
  [key: string]: {
    code: string;
    ask: string;
    bid: string;
    high: string;
    low: string;
    timestamp: string;
  };
}
