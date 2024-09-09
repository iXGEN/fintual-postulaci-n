export const simulatedPrices: { [key: string]: number } = {
    "2023-01-01": 150,
    "2023-06-01": 160,
    "2024-01-01": 170
  };
  
  export function getPriceOnDate(date: string): number | undefined {
    return simulatedPrices[date];
  }
  