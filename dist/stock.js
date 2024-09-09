"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = exports.Transaction = void 0;
class Transaction {
    constructor(date, price, quantity) {
        this.date = date;
        this.price = price;
        this.quantity = quantity;
    }
}
exports.Transaction = Transaction;
class Stock {
    constructor(symbol) {
        this.transactions = [];
        this.symbol = symbol;
    }
    buy(date, price, quantity) {
        this.transactions.push(new Transaction(date, price, quantity));
    }
    profit(endPrice) {
        let totalProfit = 0;
        this.transactions.forEach((transaction) => {
            const cost = transaction.price * transaction.quantity;
            const currentValue = endPrice * transaction.quantity;
            totalProfit += currentValue - cost;
        });
        return totalProfit;
    }
}
exports.Stock = Stock;
