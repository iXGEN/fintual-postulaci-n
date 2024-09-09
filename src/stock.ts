export class Transaction {
    date: string;
    price: number;
    quantity: number;
  
    constructor(date: string, price: number, quantity: number) {
      this.date = date;
      this.price = price;
      this.quantity = quantity;
    }
  }
  
  export class Stock {
    symbol: string;
    transactions: Transaction[] = [];
  
    constructor(symbol: string) {
      this.symbol = symbol;
    }
  
    buy(date: string, price: number, quantity: number) {
      this.transactions.push(new Transaction(date, price, quantity));
    }
  
    profit(endPrice: number): number {
      let totalProfit = 0;
      this.transactions.forEach((transaction) => {
        const cost = transaction.price * transaction.quantity;
        const currentValue = endPrice * transaction.quantity;
        totalProfit += currentValue - cost;
      });
      return totalProfit;
    }
  }
  