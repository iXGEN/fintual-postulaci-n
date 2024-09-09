"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const stock_1 = require("./stock");
const mockPrices_1 = require("./mockPrices");
const stock = new stock_1.Stock("AAPL");
stock.buy("2023-01-01", 150, 10);
stock.buy("2023-06-01", 160, 5);
const endPrice = (0, mockPrices_1.getPriceOnDate)("2024-01-01");
if (endPrice !== undefined) {
    const profit = stock.profit(endPrice);
    console.log("Profit hasta 2024-01-01: ", profit);
}
else {
    console.error("No se encontró el precio para la fecha especificada.");
}
