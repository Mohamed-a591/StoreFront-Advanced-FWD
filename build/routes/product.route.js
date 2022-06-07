"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var product_controller_1 = require("../controllers/product.controller");
var product_middleware_1 = require("../middlewares/product.middleware");
var product = express_1.default.Router();
product.get('/', product_controller_1.getProducts);
product.get('/get-one', product_controller_1.getProductsById);
product.get('/get-by-category', product_controller_1.getProductsByCategoryName);
product.post('/add', product_middleware_1.ProductMiddleWare, product_controller_1.addProduct);
product.delete('/delete', product_controller_1.deleteProduct);
exports.default = product;
