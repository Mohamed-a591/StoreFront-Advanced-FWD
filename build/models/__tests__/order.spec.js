"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var order_model_1 = __importDefault(require("../order.model"));
describe('Test order model', function () {
    var Order = new order_model_1.default();
    var orderData = {
        user_id: 1,
        products_id: [12],
        status: false
    };
    beforeAll(function () {
        Order.create(orderData);
    });
    it('Index ', function () {
        expect(Order.index()).toContain(orderData);
    });
});
