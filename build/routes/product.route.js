"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_controller_1 = require("../controllers/product.controller");
var product = express_1.default.Router();
product.get('/', product_controller_1.getProducts);
product.get('/add', product_controller_1.addProduct);
exports.default = product;
