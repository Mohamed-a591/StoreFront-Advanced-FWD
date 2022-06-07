"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var order_controller_1 = require("../controllers/order.controller");
var order_middleware_1 = require("../middlewares/order.middleware");
var order = express_1.default.Router();
order.get('/', order_controller_1.getOrders);
order.get('/get-user-orders', order_controller_1.getOrdersByUserId);
order.post('/add', order_middleware_1.OrderMiddleWare, order_controller_1.addOrder);
exports.default = order;
