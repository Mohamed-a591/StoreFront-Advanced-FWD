"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMiddleWare = void 0;
var product_validator_1 = __importDefault(require("../utils/product.validator"));
var ProductMiddleWare = function (req, res, nxt) {
    var valid = (0, product_validator_1.default)(req.body);
    if (valid) {
        req.body.valid = 1;
        nxt();
    }
    else {
        res.status(400).json(product_validator_1.default.errors);
    }
};
exports.ProductMiddleWare = ProductMiddleWare;
