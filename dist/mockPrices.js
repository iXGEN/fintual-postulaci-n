"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.simulatedPrices = void 0;
exports.getPriceOnDate = getPriceOnDate;
exports.simulatedPrices = {
    "2023-01-01": 150,
    "2023-06-01": 160,
    "2024-01-01": 170
};
function getPriceOnDate(date) {
    return exports.simulatedPrices[date];
}
